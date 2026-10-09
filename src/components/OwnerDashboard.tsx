import { useEffect, useState, type FormEvent } from 'react';
import BrandLogo from './BrandLogo';
import type { Session } from '@supabase/supabase-js';
import { atelierPieces } from '@/data/atelier';
import { workshopClient } from '@/lib/workshopClient';
import { availabilityLabels, indiaToday, validateRateDraft, type WorkshopRates, type PieceAvailability, type AvailabilityStatus } from '@/lib/workshopData';

const field = 'mt-2 w-full rounded-lg border border-noir/20 bg-white px-4 py-3 text-sm text-noir focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold';
const button = 'min-h-11 rounded-full bg-noir px-6 py-3 text-sm text-ivory disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold';

function RatesEditor({ initial, onSaved }: { initial: WorkshopRates; onSaved: (rates: WorkshopRates) => void }) {
  const [draft, setDraft] = useState({gold22k:String(initial.gold22k),gold18k:String(initial.gold18k),silver999:String(initial.silver999),date:initial.effective_date});
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState('');
  const save = async (event: FormEvent) => {
    event.preventDefault();
    const rates = {gold22k:Number(draft.gold22k),gold18k:Number(draft.gold18k),silver999:Number(draft.silver999)};
    const error = validateRateDraft(rates, draft.date);
    if (error) { setNotice(error); return; }
    setSaving(true); setNotice('');
    try {
      const result = await workshopClient.from('workshop_rates')
        .update({...rates,effective_date:draft.date,published:true}).eq('id',1).eq('revision',initial.revision).select('*').maybeSingle();
      if (result.error) throw result.error;
      if (!result.data) { setNotice('Not saved: another update or a permission change occurred. Reload the dashboard before trying again.'); return; }
      onSaved(result.data as WorkshopRates);
      setNotice('Saved. These rates are now published to the website.');
    } catch { setNotice('Rates were not saved. Check your connection and owner access, then try again.'); }
    finally { setSaving(false); }
  };
  return <form onSubmit={save} className="rounded-2xl border border-noir/10 bg-white p-6 sm:p-8">
    <h2 className="font-heading text-3xl">Metal rates</h2>
    <p className="mt-3 text-sm text-charcoal/75">Enter metal rates in rupees per gram. The website adds your existing workshop charges. These are manually maintained rates, not an automatic market feed.</p>
    <p className="mt-3 text-xs text-charcoal/70">{initial.published ? 'Currently published for '+initial.effective_date : 'Not published yet. The website still uses the labelled historical benchmark.'}</p>
    <fieldset disabled={saving} className="mt-6 grid gap-4 sm:grid-cols-3">
      {([['gold22k','22K gold (916)'],['gold18k','18K gold (750)'],['silver999','Fine silver (999)']] as const).map(([key,label]) =>
        <label key={key} className="text-sm">{label} · ₹/g<input required type="number" min="0.001" max="1000000" step="0.001" inputMode="decimal" value={draft[key]} onChange={event => setDraft({...draft,[key]:event.target.value})} className={field} /></label>)}
      <label className="text-sm sm:col-span-2">Rate date<input required type="date" max={indiaToday()} value={draft.date} onChange={event => setDraft({...draft,date:event.target.value})} className={field} /></label>
    </fieldset>
    <p className="mt-5 text-xs text-charcoal/70">Check all three rates and the date before publishing. A dated rate remains labelled with that date. Gold charge slabs and the ₹250/g silver charge are unchanged.</p>
    <button disabled={saving} className={button+' mt-6'}>{saving ? 'Saving…' : 'Publish these rates'}</button>
    <p role="status" className="mt-4 text-sm text-charcoal">{notice}</p>
  </form>;
}

function PieceEditor({ row, onSaved }: { row: PieceAvailability; onSaved: (row: PieceAvailability) => void }) {
  const piece = atelierPieces.find(item => item.id === row.piece_id);
  const [status, setStatus] = useState(row.status);
  const [note, setNote] = useState(row.note);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState('');
  if (!piece) return null;
  const dirty = status !== row.status || note !== row.note;
  const save = async (event: FormEvent) => {
    event.preventDefault(); setSaving(true); setNotice('');
    try {
      const result = await workshopClient.from('piece_availability').update({status,note:note.trim()})
        .eq('piece_id',row.piece_id).eq('revision',row.revision).select('*').maybeSingle();
      if (result.error) throw result.error;
      if (!result.data) { setNotice('Not saved. Reload to check for another update or a change to your access.'); return; }
      setNote(result.data.note); onSaved(result.data as PieceAvailability); setNotice('Saved to the website.');
    } catch { setNotice('Not saved. Check your connection and owner access.'); }
    finally { setSaving(false); }
  };
  return <form onSubmit={save} className="rounded-2xl border border-noir/10 bg-white p-5">
    <div className="flex items-center gap-4"><img src={piece.image} alt="" loading="lazy" className="h-20 w-20 rounded-lg bg-ivory object-contain" /><div><h3 className="font-heading text-2xl">{piece.title}</h3><p className="mt-1 break-all text-xs text-charcoal/60">{piece.id}</p></div></div>
    <fieldset disabled={saving} className="mt-5 space-y-4">
      <label className="block text-sm">Availability<select value={status} onChange={event => setStatus(event.target.value as AvailabilityStatus)} className={field}>{Object.entries(availabilityLabels).map(([value,label]) => <option value={value} key={value}>{label}</option>)}</select></label>
      <label className="block text-sm">Customer-facing note <span className="text-charcoal/60">(optional)</span><textarea rows={2} maxLength={180} value={note} onChange={event => setNote(event.target.value)} placeholder="For example: contact us to discuss your size." className={field} /><span className="mt-1 block text-xs text-charcoal/60">{note.length}/180 · Shown publicly; keep private customer details out.</span></label>
    </fieldset>
    <button disabled={saving || !dirty} className={button+' mt-5'}>{saving ? 'Saving…' : 'Save availability'}</button>
    <p role="status" className="mt-3 text-sm text-charcoal">{notice}</p>
  </form>;
}

export default function OwnerDashboard() {
  const [session, setSession] = useState<Session | null | undefined>(undefined);
  const [access, setAccess] = useState<'checking'|'owner'|'denied'|'error'>('checking');
  const [rates, setRates] = useState<WorkshopRates | null>(null);
  const [pieces, setPieces] = useState<PieceAvailability[]>([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState('');
  const [search, setSearch] = useState('');
  useEffect(() => {
    let active = true;
    void workshopClient.auth.getSession().then(({data,error}) => {
      if (!active) return;
      setSession(data.session);
      if (error) setNotice('Could not restore your session. Please sign in again.');
    });
    const {data} = workshopClient.auth.onAuthStateChange((_event,value) => { if (active) setSession(value); });
    return () => { active = false; data.subscription.unsubscribe(); };
  }, []);
  const userId = session?.user.id;
  useEffect(() => {
    let active = true;
    setAccess('checking'); setRates(null); setPieces([]);
    if (!userId) return;
    void (async () => {
      try {
        const permission = await workshopClient.from('owner_access').select('user_id').eq('user_id',userId).maybeSingle();
        if (!active) return;
        if (permission.error) throw permission.error;
        if (!permission.data) { setAccess('denied'); return; }
        const [rateResult,pieceResult] = await Promise.all([
          workshopClient.from('workshop_rates').select('*').eq('id',1).single(),
          workshopClient.from('piece_availability').select('*').order('piece_id'),
        ]);
        if (!active) return;
        if (rateResult.error || pieceResult.error) throw new Error('Load failed');
        setRates(rateResult.data as WorkshopRates); setPieces(pieceResult.data as PieceAvailability[]); setAccess('owner');
      } catch { if (active) setAccess('error'); }
    })();
    return () => { active = false; };
  }, [userId]);
  const signIn = async (event: FormEvent) => {
    event.preventDefault(); setBusy(true); setNotice('');
    try {
      const result = await workshopClient.auth.signInWithPassword({email:email.trim(),password});
      if (result.error) setNotice('Sign-in failed. Check your email and password and confirm your account has been created.');
      else { setPassword(''); setSession(result.data.session); }
    } catch { setNotice('Could not sign in. Check your connection and try again.'); }
    finally { setBusy(false); }
  };
  const signOut = async () => {
    setBusy(true);
    const {error} = await workshopClient.auth.signOut({scope:'local'});
    setBusy(false);
    if (error) setNotice('Sign-out failed. Please try again.'); else { setSession(null); setNotice('Signed out.'); }
  };
  const filtered = pieces.filter(row => {
    const piece = atelierPieces.find(item => item.id === row.piece_id);
    return (piece?.title+' '+row.piece_id).toLowerCase().includes(search.toLowerCase().trim());
  });
  return <div className="min-h-screen bg-ivory px-5 py-8 text-noir sm:px-8">
    <div className="mx-auto max-w-6xl">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-noir/10 pb-6"><a href="#/" aria-label="DAIVIQUE home" className="inline-flex rounded-lg"><BrandLogo variant="light" className="w-[210px]" /></a><div className="flex items-center gap-5"><a href="#/shop" className="text-sm underline underline-offset-4">View website</a>{session && <button onClick={() => { void signOut(); }} disabled={busy} className={button}>Sign out</button>}</div></header>
      <main className="py-10">
        <p className="text-xs uppercase tracking-widest text-gold">Private workspace</p><h1 className="mt-3 font-heading text-4xl sm:text-5xl">Your workshop, up to date.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal/75">Manage the rates and availability customers see. Your changes save to the database and update the website without uploading code.</p>
        {session === undefined ? <p className="mt-8" role="status">Checking your session…</p> : !session ? <form onSubmit={signIn} className="mt-8 max-w-md rounded-2xl border border-noir/10 bg-white p-6">
          <h2 className="font-heading text-3xl">Owner sign-in</h2>
          <label className="mt-6 block text-sm">Email<input required autoComplete="username" type="email" value={email} onChange={event => setEmail(event.target.value)} className={field} /></label>
          <label className="mt-5 block text-sm">Password<input required autoComplete="current-password" type="password" value={password} onChange={event => setPassword(event.target.value)} className={field} /></label>
          <button disabled={busy} className={button+' mt-6'}>{busy?'Signing in…':'Sign in'}</button>
          <p className="mt-5 text-xs leading-relaxed text-charcoal/65">Access is restricted to approved owner accounts. For password recovery, use your Supabase project’s Authentication settings.</p>
        </form> : access === 'checking' ? <p className="mt-8" role="status">Checking owner access…</p> : access === 'denied' ? <p className="mt-8 rounded-xl border border-noir/15 bg-white p-6">This account does not have owner access. Sign out and use the approved owner account. New accounts cannot grant themselves access.</p> : access === 'error' ? <div className="mt-8"><p>Could not load the dashboard. Check your connection, then reload.</p><button className={button+' mt-4'} onClick={() => window.location.reload()}>Reload dashboard</button></div> : <>
          <div className="mt-8">{rates && <RatesEditor initial={rates} onSaved={setRates} />}</div>
          <section className="mt-10"><h2 className="font-heading text-3xl">Piece availability</h2><p className="mt-3 text-sm text-charcoal/75">Only mark a piece available after checking with the workshop. AI concepts remain labelled “not yet made”.</p>
            <label className="mt-5 block max-w-md text-sm">Find a piece<input type="search" value={search} onChange={event => setSearch(event.target.value)} className={field} placeholder="Search by name or reference" /></label>
            <div className="mt-6 grid gap-5 lg:grid-cols-2">{filtered.map(row => <PieceEditor key={row.piece_id} row={row} onSaved={saved => setPieces(current => current.map(item => item.piece_id === saved.piece_id ? saved : item))} />)}</div>
            {!filtered.length && <p className="mt-6">No matching pieces.</p>}
          </section>
        </>}
        <p role="status" className="mt-5 text-sm">{notice}</p>
      </main>
    </div>
  </div>;
}

