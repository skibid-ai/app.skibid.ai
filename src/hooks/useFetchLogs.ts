import { supabase } from "@/utils/supabase";
import { Log } from "@/types/logs";
import { useState, useEffect } from "react";

const useFetchLogs = () => {
  const [data, setData] = useState<Log[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        setIsLoading(true);

        const { data, error } = await supabase
          .from("terminal_logs")
          .select("id,body,createdAt");

        if (error) throw error;
        setData(data.map((log) => ({
          ...log,
          body: JSON.parse(log.body)
        })));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLogs();
  }, []);

  return { data, isLoading };
};

export default useFetchLogs;
