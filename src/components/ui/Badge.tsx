import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant: 'positive' | 'negative' | 'default';
  className?: string;
}

export function Badge({ children, variant, className = '' }: BadgeProps) {
  const componentClasses = {
    positive:
      'bg-[rgba(0,204,68,0.12)] text-[rgba(194,255,214,0.86)] border-[rgba(0,204,68,0.16)] ',
    negative:
      'bg-[rgba(243,0,0,0.12)] text-[rgba(255,197,193,0.86)] border-[rgba(216,18,4,0.16)]',
    default: 'bg-slate-500/30 text-slate-300 border-slate-500',
  };
  const variantClassName =
    componentClasses[variant] !== undefined
      ? componentClasses[variant]
      : componentClasses.default;

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-lg px-[10px] py-[2px] text-[12px] h-[22px] border',
        variantClassName,
        className
      )}
    >
      {children}
    </div>
  );
}
