const PREDEFINED_MESSAGES = [
  {
    question: 'What are the odds of Federer winning the Australian Open?',
  },
  {
    question: 'What are the odds of Nadal winning the French Open?',
  },
];

export const ChatPredefinedMessages = ({
  setInput,
}: // sendMessage,
{
  setInput: (input: string) => void;
  // sendMessage: () => Promise<void>;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
      {PREDEFINED_MESSAGES.map((msg, i) => (
        <button
          key={i}
          className="relative overflow-hidden group  flex p-[16px] rounded-[14px]
          bg-transparent
          shadow-md
          transition-all duration-300 hover:text-white cursor-pointer"
          onClick={async () => {
            setInput(msg.question);
            // await sendMessage();
          }}
        >
          <div className="z-10 flex gap-2 items-center">
            <img src="/skibidai.svg" alt="skibidai" className="pt-1 w-8 h-8" />

            <div className="text-gray-200 group-hover:text-white text-[14px] text-left">
              {msg.question}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};
