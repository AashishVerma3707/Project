const { useEffect, useState } = require("react");

const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const delayHandler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(delayHandler);
    };
  }, [value, delay]);

  return debouncedValue;
};
export default useDebounce;
