import { useEffect, useState } from 'react';

interface IUseQueryOptions {
  immediate?: boolean;
  suspense?: boolean;
}

enum EStatus {
  'pending' = 'pending',
  'error' = 'error',
  'success' = 'success',
}

interface IQueryResponse<D> {
  status: number;
  error: null | string;
  data: D | null;
}

const useQuery = <D>(
  callback: (...args: unknown[]) => Promise<IQueryResponse<D>>,
  options: IUseQueryOptions = { immediate: false, suspense: false }
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [promiseStatus, setStatus] = useState(EStatus.pending);
  const [response, setResponse] = useState<IQueryResponse<D> | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (options.immediate) {
      const promise = callback();
      setIsLoading(() => true);

      promise
        .then((res: IQueryResponse<D>) => {
          setResponse(() => res);
          setIsSuccess(() => true);
        })
        .finally(() => {
          setIsLoading(() => false);
        });

      if (options.suspense) {
      }
    }
  });

  return {
    response,
    error,
    isLoading,
    isSuccess,
    isFetching,
    promiseStatus,
  };
};
