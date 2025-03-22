'use client';
import { AgentAnalysis } from './AgentAnalysis';
import { ButtonShowReasoning } from './ButtonShowReasoning';
import { AgentBadge } from './AgentBadge';
import { type Message } from '@/types/chats';
import { chatAtom } from '@/state/chatState';
import { useAtom } from 'jotai';
interface AgentContentProps {
  message: Message;
}

export const AgentContent = ({ message }: AgentContentProps) => {
  const [chatAtomState, setChatAtomState] = useAtom(chatAtom);

  const showAnalysisHandler = () => {
    setChatAtomState({ showReasoning: true, analysis: message.analysis });
  };

  return (
    <div className="max-w-full w-full py-3 px-4 rounded-lg text-white flex flex-col gap-2">
      <div className="flex w-full justify-between items-center">
        <AgentBadge />

        {message.analysis !== undefined && (
          <ButtonShowReasoning onClick={showAnalysisHandler} />
        )}
      </div>

      <p className="text-ds_gray-200">
        {message.content.split('\n').map((line, i) => {
          if (!line.trim()) return null;

          const match = line.match(/^\d+\.\s*\*\*(.+?)\*\*\s*–\s*(.+)$/);
          if (match) {
            const [, boldText, rest] = match;
            return (
              <p key={i} className="text-ds_gray-200">
                <b>{boldText}</b> – {rest}
              </p>
            );
          }

          return (
            <p key={i} className="text-ds_gray-200">
              {line}
            </p>
          );
        })}
      </p>

      {message.analysis !== undefined && (
        <AgentAnalysis analysis={message.analysis} />
      )}
    </div>
  );
};
