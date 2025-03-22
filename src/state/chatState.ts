import { type AnalysisObject } from '@/types/chats';
import { atom } from 'jotai';

type chatAtom = {
  showReasoning: boolean;
  analysis: undefined | AnalysisObject;
};

export const chatAtom = atom<chatAtom>({
  showReasoning: false,
  analysis: undefined,
});
