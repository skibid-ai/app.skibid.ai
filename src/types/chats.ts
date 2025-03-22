export type ChatHistoryItem = {
  id: string;
  content: {
    text: string;
    source: string;
  };
  createdAt: Date;
  roomId: string;
};

/**
 * Dto object passed between React Components
 */
export type Message={
  role: string
  content: string
  analysis: undefined | AnalysisObject
  flowOfThoughts: MessageResponse[]
}

/**
 * Response from Api
 */
export type MessageResponse = {
  user: string;
  text: string | AnalysisObject;
  action: string;
};

export function isAnalysisObject(text: string | AnalysisObject): text is AnalysisObject {
  return (text as AnalysisObject).analysis !== undefined;
}

export type AnalysisObject = {
  analysis: {
    final_assessment: string;
    key_points: string;
    kol_sentiment_analysis: string;
    market_metrics_analysis: string;
    source_documents:SourceDocumentItem[];
    trading_recommendation:{
      extracted:{
        action: string;
        reason: string;
        risk_level: string;
      }
      text: string;
    }
  };
  chain: string;
}

type SourceDocumentItem = {
  content: string;
  source: string;
  type: string;
}