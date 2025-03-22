'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http } from 'viem';
import { base } from 'viem/chains';

import { PrivyProvider } from '@privy-io/react-auth';
import { WagmiProvider, createConfig } from '@privy-io/wagmi';
import { Provider as JotaiProvider } from 'jotai';

import type { PrivyClientConfig } from '@privy-io/react-auth';

const PRIVY_PROJECT_ID = process.env.NEXT_PUBLIC_PRIVY_PROJECT_ID!;

const queryClient = new QueryClient();

const privyConfig: PrivyClientConfig = {
  appearance: {
    showWalletLoginFirst: true,
    theme: 'light',
    accentColor: '#676FFF',
    logo: 'https://your-logo-url',
  },
  embeddedWallets: {
    createOnLogin: 'users-without-wallets',
    requireUserPasswordOnCreate: true,
  },
  loginMethods: ['wallet'],
};

export const wagmiConfig = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(),
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <JotaiProvider>
      <PrivyProvider appId={PRIVY_PROJECT_ID} config={privyConfig}>
        <QueryClientProvider client={queryClient}>
          <WagmiProvider config={wagmiConfig} reconnectOnMount={false}>
            {children}
          </WagmiProvider>
        </QueryClientProvider>
      </PrivyProvider>
    </JotaiProvider>
  );
}
