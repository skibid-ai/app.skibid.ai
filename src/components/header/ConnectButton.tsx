'use client';

import { formatAddress } from '@/utils/format';
import { usePrivy } from '@privy-io/react-auth';
import Image from 'next/image';
import { useAccount } from 'wagmi';

export function ConnectButton() {
  const { connectWallet, logout } = usePrivy();
  const { address } = useAccount();

  if (!address) {
    return (
      <button
        className="flex items-center gap-1 rounded-md bg-[#17171A] border border-white/10 px-2 py-1 text-white text-sm"
        onClick={() => connectWallet()}
      >
        Connect
      </button>
    );
  }

  return (
    <div className="flex items-center gap-1 rounded-md bg-[#17171A] border border-white/10 px-2 py-1">
      <Image src="/skibidai.svg" alt="skibidai" width={16} height={16} />

      <button onClick={logout} className="text-gray-200 text-sm">
        {formatAddress(address ?? '')}
      </button>
    </div>
  );
}
