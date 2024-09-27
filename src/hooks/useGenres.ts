import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface genres {
  id: number;
  name: string;
  background_image: string;
}

interface FetchgenresResponse {
  count: number;
  results: genres[];
}

const useGames = () => {
  const [genres, setgenres] = useState<genres []>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    apiClient
      .get<FetchgenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setgenres(res.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;

        setError(error.message);
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { genres, error, isLoading };
};

export default useGames;
