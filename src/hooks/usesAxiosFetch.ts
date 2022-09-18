import { useEffect, useState } from "react";
import axios from "axios";

const useAxiosFetch = (dataURL: string) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = new AbortController();

    const fetchData = async (url: string) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          signal: source.signal,
        });

        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (e) {
        if (isMounted) {
          // @ts-ignore
          setFetchError(e.message);
          setData([]);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchData(dataURL);

    const cleanUp = () => {
      isMounted = false;
      source.abort();
    };

    return cleanUp;
  }, [dataURL]);

  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
