import { createClient } from '@supabase/supabase-js';

// This is a public browser key. All write access is enforced by database policies.
export const workshopClient = createClient(
  'https://ecvxhncrgbdmnzrewxol.supabase.co',
  'sb_publishable_4i6vZGjT68SEc7f65T7A6g_DJBY-tlw',
  { auth: { storageKey: 'daivique-owner-session', detectSessionInUrl: false } },
);

