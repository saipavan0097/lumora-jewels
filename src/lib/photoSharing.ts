export interface PhotoShare {
  id: string;
  title: string;
  image: string;
  label: string;
  pageUrl: string;
}

/** Create a labelled download; the stored jewellery photo is never changed. */
export async function preparePhotoFile(photo: PhotoShare, signal: AbortSignal): Promise<File> {
  const url = new URL(photo.image, window.location.origin);
  if (url.origin !== window.location.origin) throw new Error('Photo must belong to this website.');
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error('Photo could not be loaded.');
  const blob = await response.blob();
  if (!blob.type.startsWith('image/')) throw new Error('Photo format unavailable.');
  const bitmap = await createImageBitmap(blob);
  try {
    if (signal.aborted) throw new DOMException('Cancelled', 'AbortError');
    const width = 1200;
    const imageHeight = Math.round(bitmap.height * width / bitmap.width);
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = imageHeight + 220;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Photo download unavailable.');
    context.fillStyle = '#FAF7F2';
    context.fillRect(0, 0, width, canvas.height);
    context.drawImage(bitmap, 0, 0, width, imageHeight);
    context.fillStyle = '#111111';
    context.font = 'bold 30px sans-serif';
    context.fillText('DAIVIQUE', 44, imageHeight + 52);
    context.font = '30px sans-serif';
    context.fillText(photo.title, 44, imageHeight + 100, width - 88);
    context.font = '24px sans-serif';
    context.fillText(photo.label, 44, imageHeight + 145, width - 88);
    context.font = '20px sans-serif';
    context.fillText(`Reference: ${photo.id}`, 44, imageHeight + 184, width - 88);
    const output = await new Promise<Blob>((resolve, reject) => canvas.toBlob(
      result => result ? resolve(result) : reject(new Error('Photo download unavailable.')),
      'image/jpeg', 0.92,
    ));
    if (signal.aborted) throw new DOMException('Cancelled', 'AbortError');
    return new File([output], `DAIVIQUE-${photo.id}.jpg`, { type: 'image/jpeg' });
  } finally {
    bitmap.close();
  }
}

export function canSharePhoto(file: File): boolean {
  try { return typeof navigator.share === 'function' && typeof navigator.canShare === 'function' && navigator.canShare({ files: [file] }); }
  catch { return false; }
}

export async function sharePhoto(file: File, photo: PhotoShare): Promise<'shared' | 'cancelled' | 'unavailable'> {
  if (!canSharePhoto(file)) return 'unavailable';
  try {
    await navigator.share({
      files: [file],
      title: photo.title,
      text: `DAIVIQUE · ${photo.title}\n${photo.label}\nReference: ${photo.id}\n${photo.pageUrl}`,
    });
    return 'shared';
  } catch (error) {
    return error instanceof Error && error.name === 'AbortError' ? 'cancelled' : 'unavailable';
  }
}
