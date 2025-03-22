import { useState, useEffect } from 'react';
import axios from 'axios';

export const usePredictions = () => {
  const [data, setData] = useState<Prediction>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await axios.get(
        `https://tennis-api.szacilowski.xyz/tournaments/daily?predict=true`
      );
      console.log({ response });
      setData(response.data);
    };

    fetchData();
    setIsLoading(false);
  }, []);

  return { data, isLoading };
};

export type Prediction = {
  date: string;
  tournaments: {
    [key: string]: {
      name: string;
      matches: {
        [key: string]: {
          player1: string;
          player2: string;
          prediction: {
            winner: string;
            confidence: number;
          };
        };
      };
    };
  };
  summary: {
    tournament_count: number;
    match_count: number;
  };
};
