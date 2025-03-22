'use client';

import { useChatHistory } from '@/hooks/useChatHistory';
import { stringToUuid } from '@/utils/uuid';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { useAccount } from 'wagmi';

export const ChatHistory = () => {
  const { address } = useAccount();
  const { data, isLoading } = useChatHistory({
    address: stringToUuid(address || ''),
  });

  return (
    <div className="flex flex-col gap-16 w-full mt-20">
      <h4 className="text-white text-xl text-center font-semibold">
        My Library
      </h4>

      <div className="flex flex-col gap-4">
        {data.length === 0 && (
          <h5 className="text-gray-400 text-sm text-center">
            Connect your wallet to see your chat history
          </h5>
        )}

        {data.length > 0 &&
          data?.map((chat) => (
            <Link
              href={`/${chat.roomId}`}
              key={chat.id}
              className="flex justify-between gap-4 border-b border-[#2A2530]/50 pb-4"
            >
              <p className="text-gray-400 text-sm text-nowrap w-2/12">
                {new Date(chat.createdAt).toLocaleString(undefined, {
                  dateStyle: 'short',
                  timeStyle: 'short',
                })}
              </p>

              <h5 className="text-gray-200 text-sm font-semibold w-10/12">
                {chat.content.text}
              </h5>

              <span className="text-[#656376]">
                <FaArrowRight size={12} />
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
};
