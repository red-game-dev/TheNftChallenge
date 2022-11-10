import { useCallback, useState } from "react";


export const useLocalStorage = <StoreDataValue = string>(key: string, initialState: StoreDataValue) => {
  const serializedInitialState = JSON.stringify(initialState);
  let storageValue = initialState;

  try {
    storageValue = JSON.parse(localStorage.getItem(key) || "") ?? initialState;
  } catch {
    localStorage.setItem(key, serializedInitialState);
  }
  const [value, setValue] = useState(storageValue);
  const updatedSetValue = useCallback(
    (newValue: StoreDataValue) => {
      const serializedNewValue = JSON.stringify(newValue);

      if (
        serializedNewValue === serializedInitialState ||
        typeof newValue === "undefined"
      ) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, serializedNewValue);
      }
      setValue(newValue ?? initialState);
    },
    [initialState, serializedInitialState, key]
  );

  return [value, updatedSetValue];
};
