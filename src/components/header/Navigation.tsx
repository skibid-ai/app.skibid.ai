'use client';

import { NewChatButton } from './NewChatButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-2 items-center justify-center py-4">
      <NewChatButton />

      <div
        className="rounded-md bg-gradient-to-b from-[#D4AAFB00] via-[#D4AAFB] to-[#D4AAFB00] flex items-center gap-2
       [background:linear-gradient(black,black)_padding-box,_linear-gradient(to_bottom,#726C79,black)_border-box;] text-sm
      "
      >
        <Link
          href="/predictions"
          className={`text-ds_gray-200 hover:bg-[#2A2530] py-[6px] px-[12px] rounded-[10px] ${
            pathname === '/predictions' ? ' text-amber-200' : ''
          }`}
        >
          Predictions
        </Link>
      </div>
    </div>
  );
};
