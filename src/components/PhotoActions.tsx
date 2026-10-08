import { useEffect, useId, useState } from 'react';
import { Download, Link, Share2 } from 'lucide-react';
import { canSharePhoto, preparePhotoFile, sharePhoto, type PhotoShare } from '@/lib/photoSharing';

export default function PhotoActions({ photo }: { photo: PhotoShare }) {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  const linkId = useId();
  const { id, title, image, label, pageUrl } = photo;

  useEffect(() => {
    if (!open) return;
    const controller = new AbortController();
    let objectUrl = '';
    setFile(null);
    setDownloadUrl('');
    setStatus('Preparing your photo…');
    preparePhotoFile({ id, title, image, label, pageUrl }, controller.signal).then(result => {
      if (controller.signal.aborted) return;
      objectUrl = URL.createObjectURL(result);
      setFile(result);
      setDownloadUrl(objectUrl);
      setStatus(canSharePhoto(result) ? 'Photo ready. Choose WhatsApp and your recipient when sharing.' : 'Use Download photo, then attach it in WhatsApp.');
    }).catch(() => {
      if (!controller.signal.aborted) setStatus('Could not prepare the labelled photo. You can still copy the design link below.');
    });
    return () => { controller.abort(); if (objectUrl) URL.revokeObjectURL(objectUrl); };
  }, [open, id, title, image, label, pageUrl]);

  async function handleShare() {
    if (!file || busy) return;
    setBusy(true);
    const result = await sharePhoto(file, photo);
    setBusy(false);
    if (result === 'unavailable') setStatus('Sharing is unavailable here. Download the photo and attach it in WhatsApp.');
    // Cancelling the share sheet is not an error and must not start a download.
    if (result === 'shared') setStatus('Photo handed to your sharing app. Complete sending there.');
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setStatus('Design link copied.');
    } catch {
      setStatus('Select and copy the design link below.');
      const input = document.getElementById(linkId) as HTMLInputElement | null;
      input?.focus();
      input?.select();
    }
  }

  return <details onToggle={event => setOpen(event.currentTarget.open)} className="mt-4 rounded-xl border border-noir/15 bg-white text-noir">
    <summary className="min-h-11 cursor-pointer px-4 py-3 text-sm font-medium">Photo &amp; design link</summary>
    {open && <div className="border-t border-noir/10 px-4 pb-4 pt-3">
      <p className="text-xs leading-relaxed text-charcoal/80">Share a picture through your phone’s share menu, or download it and attach it in WhatsApp. The photo includes its name and original/AI label.</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {file && canSharePhoto(file) && <button type="button" disabled={busy} onClick={handleShare} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-noir px-4 py-3 text-xs text-ivory disabled:opacity-60"><Share2 className="h-4 w-4" aria-hidden="true" />{busy ? 'Opening share…' : 'Share photo'}</button>}
        {downloadUrl && <a href={downloadUrl} download={file?.name} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-noir/25 px-4 py-3 text-xs"><Download className="h-4 w-4" aria-hidden="true" />Download photo</a>}
        <button type="button" onClick={copyLink} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-noir/25 px-4 py-3 text-xs"><Link className="h-4 w-4" aria-hidden="true" />Copy link</button>
      </div>
      <p role="status" className="mt-3 text-xs leading-relaxed text-charcoal/80">{status}</p>
      <label htmlFor={linkId} className="mt-3 block text-xs text-charcoal/80">Link to this design</label>
      <input id={linkId} readOnly value={pageUrl} onFocus={event => event.currentTarget.select()} className="mt-1 w-full min-w-0 rounded-md border border-noir/20 bg-ivory px-3 py-2 text-xs" />
    </div>}
  </details>;
}
