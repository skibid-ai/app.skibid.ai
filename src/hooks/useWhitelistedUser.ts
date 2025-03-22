import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export const useWhitelistedUser = () => {
  const { address } = useAccount();
  const [isWhitelistedUser, setIsWhitelistedUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from("whitelist-deswarm")
          .select("*")
          .eq("address", address);

        if (error) throw error;
        setIsWhitelistedUser(data.length > 0);
      } catch (error) {
        setIsWhitelistedUser(false);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (address) {
      fetchUsers();
    }
  }, [address]);

  return { isWhitelistedUser, isLoading };
};
