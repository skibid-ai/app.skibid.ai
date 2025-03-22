import { AgentReasoning } from './AgentReasoning/AgentReasoning';
import { BackButton } from '@/components/ui/BackButton';
import { chatAtom } from '@/state/chatState';
import ScrollArea from '@/components/ui/ScrollArea';
import { useSetAtom } from 'jotai';

export function AgentReasoningView() {
  const setChatAtomState = useSetAtom(chatAtom);
  return (
    <div className="flex flex-col w-full h-[calc(100vh-var(--headerHeight))]">
      <div className="flex pt-[24px] pl-[10px] w-[95%] md:w-[1100px] mx-auto">
        <BackButton
          onClick={() => {
            setChatAtomState({ showReasoning: false, analysis: undefined });
          }}
        />
      </div>
      <div className="flex grow">
        <ScrollArea className="h-[calc(100vh-54px-74px)] w-[calc(100%-10px)] mx-auto flex justify-end">
          <div className="flex p-[10px] w-[95%] md:w-[1100px] mx-auto mb-[80px]">
            <AgentReasoning />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
