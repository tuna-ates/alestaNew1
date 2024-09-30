import { useState } from "react";

const useLocalStorage = (key, initialData = "") => {
  const [val, setVal] = useState(() => {
    const localValue = localStorage.getItem(key);
    if (localValue) {
      return localValue;
    }
    return initialData;
  });

  const setLocalStorage = (newValue) => {
    setVal(newValue);
    JSON.stringify(localStorage.setItem(key, newValue));
  };

  return [val, setLocalStorage];
};

export default useLocalStorage;