import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endPoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    apiClient
      .get<FetchResponse<T>>(endPoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
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

  return { data, error, isLoading };
};

export default useData;
