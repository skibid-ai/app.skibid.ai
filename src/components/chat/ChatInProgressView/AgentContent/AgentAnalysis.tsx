import { AnalysisObject } from '@/types/chats';
import { Badge } from '@/components/ui/Badge';

interface AgentAnalysisProps {
  analysis: AnalysisObject;
  variant?: 'default' | 'analysis';
}

export function AgentAnalysis({ analysis, variant }: AgentAnalysisProps) {
  const riskLevel =
    analysis.analysis.trading_recommendation.extracted.risk_level;
  const action = analysis.analysis.trading_recommendation.extracted.action;

  const variantClasses = {
    default: '',
    analysis:
      'bg-gradient-to-b from-[#1F1129] to-[#120919] rounded-[16px] p-[16px] border shadow-lg border-transparent [background:linear-gradient(#21102E,#0C0416)_padding-box,_linear-gradient(to_bottom,#726C79,black)_border-box;]',
  };

  return (
    <div
      className={`flex flex-col ${
        variant === 'analysis' && variantClasses.analysis
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-ds_gray-200 font-bold text-sm">
            Final assessment
          </h3>

          {analysis.analysis.final_assessment.split('\n').map((line, i) => (
            <p key={i} className="text-ds_gray-200 w-full">
              <b>{line.replace('-', '').split('**')[1]}</b>
              {line.split('**')[2]}
            </p>
          ))}
        </div>

        {/* trading recommendation */}
        <div className="flex flex-col gap-2 bg-ds_overlay rounded-xl p-4 text-sm">
          <h3 className="text-ds_gray-200 font-bold">Trading recommendation</h3>

          <div className="flex items-center gap-2">
            <Badge variant={action === 'HOLD' ? 'negative' : 'positive'}>
              {action}
            </Badge>

            <Badge
              variant={
                riskLevel === 'HIGH'
                  ? 'negative'
                  : riskLevel === 'LOW'
                  ? 'positive'
                  : 'default'
              }
            >
              {riskLevel}
            </Badge>
          </div>

          <p className="text-ds_gray-200">
            {analysis.analysis.trading_recommendation.extracted.reason}
          </p>
        </div>
      </div>
    </div>
  );
}
