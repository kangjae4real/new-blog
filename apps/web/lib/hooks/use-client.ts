import { useEffect, useState } from "react";

export type UseClient = () => [boolean];

const useClient: UseClient = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return [ready];
};

export default useClient;
