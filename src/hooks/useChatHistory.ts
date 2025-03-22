import { supabase } from "@/utils/supabase";
import { ChatHistoryItem } from "@/types/chats";
import { useState, useEffect } from "react";

export const useChatHistory = ({ address }: { address: string }) => {
  const [data, setData] = useState<ChatHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setIsLoading(true);

        const { data: rawData, error } = await supabase
          .from("memories")
          .select("id,content,createdAt,roomId")
          .eq("userId", address)
          .order("createdAt", { ascending: true });

        if (error) throw error;

        console.log({ rawData });

        const uniqueRoomIds = new Set<string>();
        const filteredData = rawData.filter((item) => {
          if (uniqueRoomIds.has(item.roomId)) {
            return false;
          }
          uniqueRoomIds.add(item.roomId);
          return true;
        });

        const sortedData = filteredData.sort((a, b) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });

        console.log({ sortedData });

        setData(sortedData.slice(0, 6));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (address) {
      fetchHistory();
    }
  }, [address]);

  return { data, isLoading };
};
