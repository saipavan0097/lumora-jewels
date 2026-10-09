import { useId } from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

/** The approved DJ and flowing-Q artwork, with gold suited to each background. */
export default function BrandLogo({ variant = 'dark', className = '' }: BrandLogoProps) {
  const id = 'daivique-' + useId().replace(/:/g, '');
  const gold = variant === 'light'
    ? ['#A4772E', '#94641D', '#875C1B']
    : ['#F0D082', '#FFE6AB', '#C89437'];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="20 120 2138 524"
      width="214"
      height="53"
      role="img"
      aria-label="DAIVIQUE Jewellery"
      focusable="false"
      className={'block h-auto shrink-0 ' + className}
      data-brand-logo={variant}
    >
      <defs>
        <mask id={id + '-shape'} maskUnits="userSpaceOnUse" x="20" y="120" width="2138" height="524" style={{ maskType: 'alpha' }}>
          <image href="/brand/daivique-dj-wordmark-v6.png" width="2172" height="724" />
        </mask>
        <linearGradient id={id + '-gold'} x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0" stopColor={gold[0]} />
          <stop offset="0.45" stopColor={gold[1]} />
          <stop offset="1" stopColor={gold[2]} />
        </linearGradient>
      </defs>
      <rect x="20" y="120" width="2138" height="524" fill={'url(#' + id + '-gold)'} mask={'url(#' + id + '-shape)'} />
    </svg>
  );
}
