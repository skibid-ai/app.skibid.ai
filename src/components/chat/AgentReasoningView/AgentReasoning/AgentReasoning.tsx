import { ReasoningCard } from './ReasoningCard/ReasoningCard';
import { ReasoningDivider } from './ReasoningDivider/ReasoningDivider';
import { AgentAnalysis } from '../../ChatInProgressView/AgentContent/AgentAnalysis';
import { chatAtom } from '@/state/chatState';
import { useAtomValue } from 'jotai';

export function AgentReasoning() {
  const chatAtomState = useAtomValue(chatAtom);
  if (chatAtomState.analysis === undefined) {
    return <></>;
  }

  const sourceDocuments = chatAtomState.analysis?.analysis.source_documents;
  const metrics = chatAtomState.analysis?.analysis.market_metrics_analysis;
  const sentiments = chatAtomState.analysis?.analysis.kol_sentiment_analysis;
  const keyPoints = chatAtomState.analysis?.analysis.key_points;

  return (
    <div className="text-white flex flex-col gap-[24px] items-center h-full w-full grow">
      <span
        className="rounded-full p-4 shadow-lg text-ds_gray-200 border border-transparent
      [background:linear-gradient(#21102E,#0C0416)_padding-box,_linear-gradient(to_bottom,#726C79,black)_border-box;]"
      >
        Start of analysis...
      </span>

      <ReasoningDivider />

      <ReasoningCard title="Sources">
        <div className="grid grid-cols-4 gap-2 overflow-hidden p-2">
          {sourceDocuments?.map((el, index) => (
            <p
              key={index}
              className="p-2 rounded-[8px] outline-dashed outline-ds_gray-400 text-ds_gray-200 text-pretty break-words"
            >
              {el?.content.length > 128
                ? `${el?.content.slice(0, 128)}...`
                : el?.content}
            </p>
          ))}
        </div>
      </ReasoningCard>

      <ReasoningCard title="Market Analysis">
        <div className="flex flex-col w-full gap-[16px]">
          <div className="flex flex-col gap-1 w-full">
            <span className="text-ds_gray-200 font-bold">Metrics</span>

            {metrics.split('\n').map((line, i) => (
              <p key={i} className="text-ds_gray-200 text-sm w-full">
                <b>{line.replace('-', '').split('**')[1]}</b>
                {line.split('**')[2]}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <span className="text-ds_gray-200 font-bold">Sentiments</span>

            {sentiments.split('\n').map((line, i) => (
              <p key={i} className="text-ds_gray-200 text-sm w-full">
                <b>{line.replace('-', '').split('**')[1]}</b>
                {line.split('**')[2]}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <span className="font-bold text-ds_gray-200">Key points</span>

            {keyPoints.split('\n').map((line, i) => (
              <p key={i} className="text-ds_gray-200 text-sm w-full">
                <b>{line.replace('-', '').split('**')[1]}</b>
                {line.split('**')[2]}
              </p>
            ))}
          </div>
        </div>
      </ReasoningCard>

      <ReasoningDivider />

      <AgentAnalysis analysis={chatAtomState.analysis} variant="analysis" />
    </div>
  );
}
