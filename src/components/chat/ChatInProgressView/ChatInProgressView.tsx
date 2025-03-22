import { AgentBadge } from './AgentContent/AgentBadge';
import { UserContent } from './UserContent/UserContent';
import { AgentContent } from './AgentContent/AgentContent';
import { type Message } from '@/types/chats';
import ScrollArea from '@/components/ui/ScrollArea';

export const ChatInProgressView = ({
  messages,
  isAgentLoading,
  isError,
}: {
  messages: Message[];
  isAgentLoading: boolean;
  isError: boolean;
}) => {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 md:pt-0 pt-6 w-full">
        <div className="flex flex-col gap-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === 'user' ? 'justify-end' : 'w-full justify-start'
              }`}
            >
              {msg.role === 'user' ? (
                <UserContent content={msg.content} />
              ) : (
                <AgentContent message={msg} />
              )}
            </div>
          ))}

          {/* Agent Loading */}
          {isAgentLoading && (
            <div className="max-w-full w-full py-3 px-4 rounded-lg text-white flex gap-0.5 justify-start items-center">
              <AgentBadge name="Fat Nigga Analyzing..." />

              <div className="flex space-x-1 mt-5 mb-3 items-center">
                <div className="w-1 h-1 bg-white/80 rounded-full animate-minibounce"></div>
                <div className="w-1 h-1 bg-white/80 rounded-full animate-minibounce-delay-1"></div>
                <div className="w-1 h-1 bg-white/80 rounded-full animate-minibounce-delay-2"></div>
              </div>
            </div>
          )}

          {isError && (
            <div className="max-w-full w-full py-3 px-4 rounded-lg bg-red-900/40 text-red-200 flex flex-col gap-2">
              <AgentBadge />

              <p>I&apos;m broken, sorry sir.</p>
            </div>
          )}
        </div>
      </div>
    </ScrollArea>
  );
};
