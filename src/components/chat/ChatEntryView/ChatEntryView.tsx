import { ChatPredefinedMessages } from './ChatPredefinedMessages/ChatPredefinedMessages';

export const ChatEntryView = ({
  setInput,
}: // sendMessage,
{
  setInput: (input: string) => void;
  // sendMessage: () => Promise<void>;
}) => {
  return (
    <div className="flex flex-col items-center mx-auto overflow-hidden w-full">
      <div className="flex flex-col gap-2 items-center mb-[60px]">
        <img src="/fat-nigga.png" alt="skibidai" className="w-32 h-auto" />

        <div className="text-white text-[20px] leading-[26px] font-[500] text-center">
          Predict the match
        </div>
        <div className="text-[#797889] text-center">
          Ask me anything about the future of the tennis matches
        </div>
      </div>

      <ChatPredefinedMessages
        setInput={setInput}
        // sendMessage={sendMessage}
      />
    </div>
  );
};
