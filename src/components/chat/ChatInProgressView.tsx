import Image from 'next/image';

const AgentBadge = () => {
  return (
    <div className="border rounded-full bg-black text-gray-200 border-gray-700 flex items-center gap-2 pr-3 mr-auto">
      <div className="relative h-6 w-6 rounded-full overflow-hidden">
        <Image src="/cheems.jpg" alt="avatar" fill />
      </div>
      <p className="text-sm font-semibold">King</p>
    </div>
  );
};

const UserContent = ({ content }: { content: string }) => {
  return (
    <div className="bg-gray-900 text-white max-w-[70%] py-2 px-4 rounded-lg">
      {content.split('\n').map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  );
};

const AgentContent = ({ content }: { content: string }) => {
  return (
    <div className="max-w-full w-full py-3 px-4 rounded-lg bg-zinc-900 text-white flex flex-col gap-2">
      <AgentBadge />

      <p>{content}</p>
    </div>
  );
};

export const ChatInProgressView = ({
  messages,
  isAgentLoading,
  isError,
}: {
  messages: any[];
  isAgentLoading: boolean;
  isError: boolean;
}) => {
  return (
    <div className="flex-1 md:pt-0 pt-6 overflow-y-auto w-full">
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
              <AgentContent content={msg.content} />
            )}
          </div>
        ))}

        {/* Agent Loading */}
        {isAgentLoading && (
          <div className="max-w-full w-full py-3 px-4 rounded-lg bg-zinc-900 text-white flex flex-col gap-2">
            <AgentBadge />

            <div className="flex space-x-1 mt-6 mb-3">
              <div className="w-2 h-2 bg-white rounded-full animate-minibounce"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-minibounce-delay-1"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-minibounce-delay-2"></div>
            </div>
          </div>
        )}

        {isError && (
          <div className="max-w-full w-full py-3 px-4 rounded-lg bg-red-900 text-red-200 flex flex-col gap-2">
            <AgentBadge />

            <p>I'm broken, sorry sir.</p>
          </div>
        )}
      </div>
    </div>
  );
};
