import { type ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
};

export default function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms, transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
