'use client';

import { usePredictions } from '@/hooks/usePredictions';

export default function Page() {
  const { data, isLoading } = usePredictions();
  console.log({ data });

  return (
    <div className="w-full h-full pb-32">
      <div className="flex flex-col gap-4 items-center justify-center h-full text-white">
        <h1 className="text-2xl font-bold">Predictions</h1>
        <div className="flex flex-col gap-4">
          {data &&
            data.tournaments &&
            Object.keys(data.tournaments).map((tournament) => (
              <div key={tournament} className="w-full flex flex-col gap-8">
                <h2 className="text-lg font-bold mx-auto">
                  {data.tournaments[tournament].name}
                </h2>

                <div className="flex flex-col">
                  <div className="grid grid-cols-3 gap-2 w-full font-bold py-2">
                    <span className="text-sm text-gray-400">Players</span>
                    <span className="text-sm text-gray-400 text-center">
                      Winner
                    </span>
                    <span className="text-sm text-gray-400 text-right">
                      Confidence
                    </span>
                  </div>

                  {data.tournaments[tournament].matches &&
                    Object.keys(data.tournaments[tournament].matches).map(
                      (match) => (
                        <div
                          key={match}
                          className="grid grid-cols-3 gap-2 w-full border-t border-gray-800/50 py-2"
                        >
                          <div className="flex gap-2 items-center">
                            <span className=" text-gray-100 font-bold">
                              {
                                data.tournaments[tournament].matches[match]
                                  .player1
                              }
                            </span>
                            <span className="text-xs lowercase text-gray-100 font-bold">
                              VS
                            </span>
                            <span className="text-gray-100 font-bold">
                              {
                                data.tournaments[tournament].matches[match]
                                  .player2
                              }
                            </span>
                          </div>

                          <span className="text-gray-100 font-bold text-center">
                            {
                              data.tournaments[tournament].matches[match]
                                .prediction.winner
                            }
                          </span>

                          <span
                            className={` text-gray-100 text-right font-bold ${
                              data.tournaments[tournament].matches[match]
                                .prediction.confidence > 0.8
                                ? 'text-green-400'
                                : data.tournaments[tournament].matches[match]
                                    .prediction.confidence > 0.7
                                ? 'text-amber-400'
                                : 'text-white'
                            }`}
                          >
                            {
                              data.tournaments[tournament].matches[match]
                                .prediction.confidence
                            }
                          </span>
                        </div>
                      )
                    )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
