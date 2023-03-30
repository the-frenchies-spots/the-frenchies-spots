import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type UseStorage = {
  value: string | undefined;
  updateValue: (newValue: string) => Promise<void>;
};

const useStorage = (storageKey: string): UseStorage => {
  const [value, setValue] = useState<string>();

  useEffect(() => {
    AsyncStorage.getItem(storageKey).then((lValue) => {
      setValue(value);
    });
  }, []);

  const updateValue = async (newValue: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(storageKey, newValue);
      setValue(newValue);
    } catch (err) {
      console.error(err);
    }
  };

  return { value, updateValue };
};

export default useStorage;
