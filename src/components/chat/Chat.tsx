'use client';

import { ChatEntryView } from './ChatEntryView/ChatEntryView';
import { ChatInProgressView } from './ChatInProgressView/ChatInProgressView';
import { AgentReasoningView } from './AgentReasoningView/AgentReasoningView';
import { BackButton } from '../ui/BackButton';
import { supabase } from '@/utils/supabase';
import { stringToUuid } from '@/utils/uuid';
import { type Message, type MessageResponse } from '@/types/chats';
import { chatAtom } from '@/state/chatState';
import { useState, useRef, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';

export default function Chat({ chatId }: { chatId?: string }) {
  const [messages, setMessages] = useState<Message[]>([
    // {
    //   role: "user",
    //   content:
    //     "I'm new to cryptocurrency investing, and I would like to understand how blockchain technology works and why it is considered secure. Could you provide a detailed explanation of its structure, the role of miners, and how transactions are verified?",
    // },
    // {
    //   role: "assistant",
    //   content:
    //     "Certainly! Blockchain is a decentralized ledger that records all transactions across a network of computers. Each transaction is grouped into a block, and once verified, it is added to a chain of previous blocks, forming the blockchain.\n\nSecurity comes from its consensus mechanism—commonly Proof of Work (PoW) or Proof of Stake (PoS). In PoW, miners solve complex cryptographic puzzles to validate transactions and add new blocks, ensuring the integrity of the network. Once a block is added, altering any past data becomes nearly impossible due to cryptographic hashes linking each block to the previous one.\n\nSince the blockchain is distributed across thousands of nodes, it is resistant to hacking, fraud, and censorship. This decentralization ensures trust without the need for intermediaries like banks. Would you like me to explain any part in more detail?",
    // },
    // {
    //   role: "user",
    //   content:
    //     "What are the key risks associated with investing in cryptocurrency, and how can I mitigate them?",
    // },
    // {
    //   role: "assistant",
    //   content:
    //     "Great question! Investing in cryptocurrency comes with several risks:\n\n1. **Volatility** – Crypto prices are highly unpredictable, often experiencing rapid fluctuations. Diversifying your portfolio and investing only what you can afford to lose can help manage this risk.\n2. **Security Threats** – Hackers target exchanges, wallets, and smart contracts. Using hardware wallets, enabling two-factor authentication, and choosing reputable platforms reduces exposure.\n3. **Regulatory Uncertainty** – Governments worldwide are still defining crypto regulations, which can impact market stability. Staying informed about legal changes is crucial.\n4. **Scams and Fraud** – Fake ICOs, rug pulls, and Ponzi schemes exist. Always conduct thorough research before investing in any project.\n5. **Liquidity Issues** – Some cryptocurrencies have low trading volumes, making it difficult to buy or sell large amounts without affecting the price.\n\nMitigating these risks involves proper research, using secure storage methods, staying updated with regulations, and diversifying investments. Would you like me to elaborate on any specific risk?",
    // },
    // {
    //   role: "user",
    //   content:
    //     "What are the key risks associated with investing in cryptocurrency, and how can I mitigate them?",
    // },
    // {
    //   role: "assistant",
    //   content:
    //     "Great question! Investing in cryptocurrency comes with several risks:\n\n1. **Volatility** – Crypto prices are highly unpredictable, often experiencing rapid fluctuations. Diversifying your portfolio and investing only what you can afford to lose can help manage this risk.\n2. **Security Threats** – Hackers target exchanges, wallets, and smart contracts. Using hardware wallets, enabling two-factor authentication, and choosing reputable platforms reduces exposure.\n3. **Regulatory Uncertainty** – Governments worldwide are still defining crypto regulations, which can impact market stability. Staying informed about legal changes is crucial.\n4. **Scams and Fraud** – Fake ICOs, rug pulls, and Ponzi schemes exist. Always conduct thorough research before investing in any project.\n5. **Liquidity Issues** – Some cryptocurrencies have low trading volumes, making it difficult to buy or sell large amounts without affecting the price.\n\nMitigating these risks involves proper research, using secure storage methods, staying updated with regulations, and diversifying investments. Would you like me to elaborate on any specific risk?",
    // },
  ]);
  const [input, setInput] = useState('');
  const [isAgentLoading, setIsAgentLoading] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const { address } = useAccount();
  const [isNewChat, setIsNewChat] = useState<boolean>(true);
  const [roomId, setRoomId] = useState<string | null>(null);
  const [chatAtomState, setChatAtomState] = useAtom(chatAtom);

  useEffect(() => {
    if (chatId) {
      setIsNewChat(false);
    }
  }, [chatId]);

  useEffect(() => {
    const getChatHistory = async () => {
      try {
        setMessages([]);

        const { data, error } = await supabase
          .from('memories')
          .select('id,content,createdAt')
          .eq('roomId', chatId);

        console.log({ data, chatId });
        if (error) throw error;

        setMessages(
          data.map((el) => ({
            role: el.content.user === 'Eliza' ? 'assistant' : 'user',
            content: el.content.text,
            analysis: undefined,
            flowOfThoughts: [],
          }))
        );
      } catch (error) {
        console.error(error);
      }
    };

    if (chatId && !isNewChat) {
      console.log('fetching chat history', chatId);
      getChatHistory();
    }
  }, [chatId, isNewChat]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      if (scrollHeight < 150) {
        textareaRef.current.style.height = `${scrollHeight + 5}px`;
      } else {
        console.log(scrollHeight);
        textareaRef.current.style.height = `168px`;
      }
    }
  }, [input]);

  useEffect(() => {
    if (!roomId) {
      const roomId = chatId ? chatId : stringToUuid(`${Date.now()}-${address}`);
      setRoomId(roomId);
    }
  }, [chatId, address]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: 'user',
        content: input.trim(),
        analysis: undefined,
        flowOfThoughts: [],
      },
    ]);

    setIsAgentLoading(true);
    setInput('');
    setIsTyping(true);
    setIsError(false);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TERMINAL_AGENT_ID}/message`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: input.trim(),
            userId: address,
            roomId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result: MessageResponse[] = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: '',
        analysis: undefined,
        flowOfThoughts: [],
      };
      const lastMessage = result.at(-1);
      if (lastMessage !== undefined) {
        if (typeof lastMessage.text === 'string') {
          assistantMessage.content = '';
        } else {
          assistantMessage.analysis = lastMessage.text;
        }
      }
      assistantMessage.flowOfThoughts = result;
      setMessages((prev) => [...prev, assistantMessage]);
      setIsAgentLoading(false);
      if (
        lastMessage?.text !== undefined &&
        typeof lastMessage.text === 'string'
      ) {
        await typeWriter(lastMessage.text);
      }
    } catch (error) {
      setIsError(true);
      console.error('Error sending message:', error);
    } finally {
      setInput('');
      setIsAgentLoading(false);
      setIsTyping(false);
    }
  };

  const [isTyping, setIsTyping] = useState<boolean>(false);

  const typeWriter = (text: string, index = 0): Promise<void> => {
    return new Promise((resolve) => {
      const typeNext = (idx: number) => {
        if (idx < text.length) {
          setMessages((prev) => {
            const newMessages = [...prev];
            const lastMessage = newMessages[newMessages.length - 1];
            lastMessage.content = text.substring(0, idx + 1); // Update content gradually
            return newMessages;
          });

          setTimeout(() => typeNext(idx + 1), 10);
        } else {
          resolve();
        }
      };

      typeNext(index);
    });
  };

  const isChatInProgress = messages && messages?.length > 0;
  const router = useRouter();

  return (
    <>
      {chatAtomState.showReasoning ? (
        <AgentReasoningView />
      ) : (
        <div
          className={`md:pt-6 pt-0 flex flex-col w-full h-[calc(100vh-var(--headerHeight))] justify-center items-center max-w-[800px] px-4 mx-auto ${
            (!messages || messages.length === 0) &&
            'justify-center items-center gap-y-6'
          }`}
        >
          {isChatInProgress ? (
            <BackButton
              onClick={() => {
                setRoomId(null);
                setMessages([]);
                router.push('/');
              }}
            />
          ) : null}

          {!isChatInProgress ? (
            <ChatEntryView
              setInput={setInput}
              // sendMessage={sendMessage}
            />
          ) : (
            <ChatInProgressView
              messages={messages}
              isAgentLoading={isAgentLoading}
              isError={isError}
            />
          )}

          {/* Input section etc */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="w-full my-4"
          >
            <div
              className="flex flex-col justify-between items-end gap-2 min-h-[105px] rounded-[16px] px-4 py-3
    [background:linear-gradient(black,black)_padding-box]
    max-h-[165px] overflow-auto border border-gray-100/10 cursor-text"
              onClick={(e) => {
                if (textareaRef.current) {
                  textareaRef.current.focus();
                }
              }}
            >
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask the King..."
                rows={1}
                className="w-full text-ds_gray-200
      disabled:opacity-50 disabled:cursor-not-allowed placeholder-ds_gray-400
      focus:outline-none bg-transparent resize-none"
                disabled={isTyping || isAgentLoading}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
              />

              <button
                type="submit"
                className="p-2 rounded-md bg-white text-black hover:bg-green-200
      transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isTyping || isAgentLoading || !input.trim()}
              >
                <div className="size-5 overflow-hidden">
                  <svg
                    className="w-5 h-5 rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 3 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
