import { Navigation } from './Navigation';
import { ConnectButton } from './ConnectButton';
import { Logo } from '../ui/Logo';

export function Header() {
  return (
    <div
      className={`flex flex-col items-center w-full h-[var(--headerHeight)] 
        `}
    >
      <div className="flex items-center px-[24px] w-full justify-between">
        <Logo />

        <Navigation />

        <ConnectButton />
      </div>
      <div className="h-[1px] w-full bg-gradient-to-r from-[#d4aafb00] via-amber-500 to-[#d4aafb00]" />
    </div>
  );
}
