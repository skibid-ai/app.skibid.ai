import { cn } from '@/utils/cn';
import { ScrollArea as RadixScrollArea } from 'radix-ui';
import { ReactNode } from 'react';

interface ScrollAreaProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollArea({
  children,
  className = '',
}: ScrollAreaProps) {
  return (
    <RadixScrollArea.Root
      className={cn('w-full h-[100px] overflow-hidden', className)}
      type="auto"
    >
      <RadixScrollArea.Viewport className="size-full">
        {children}
      </RadixScrollArea.Viewport>

      <RadixScrollArea.Scrollbar
        className="rounded-full flex touch-none select-none bg-white/10 p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
        orientation="vertical"
      >
        <RadixScrollArea.Thumb className="relative flex-1 rounded-[10px] bg-white/30 hover:bg-white/50 before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-11 before:min-w-11 before:-translate-x-1/2 before:-translate-y-1/2" />
      </RadixScrollArea.Scrollbar>
      <RadixScrollArea.Scrollbar
        className="flex touch-none select-none bg-black p-0.5 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
        orientation="horizontal"
      >
        <RadixScrollArea.Thumb className="relative flex-1 rounded-[10px] bg-mauve10 before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-[44px] before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2" />
      </RadixScrollArea.Scrollbar>
      <RadixScrollArea.Corner />
    </RadixScrollArea.Root>
  );
}
