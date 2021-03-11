import { useCallback, useState } from 'react';

export default function useToggle(initialValue = false) {
  const [flag, setFlag] = useState(initialValue);

  const toggle = useCallback(() => {
    setFlag(!flag);
  }, [flag]);

  return [flag, toggle];
}
