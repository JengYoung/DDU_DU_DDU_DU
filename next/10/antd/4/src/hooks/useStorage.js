import React, { useEffect, useState } from 'react';

const ERROR_MESSAGE = 'Get Storage Item Failed';

export function useStorage(storageName, key, defaultValue) {
  const [storage, setStorage] = useState(null);
  const [value, setValue] = useState(null);

  useEffect(() => {
    setStorage(window[storageName]);
  }, []);

  const setData = (keyValue) => {
    if (!storage) return;

    try {
      storage.setItem(key, JSON.stringify(keyValue));
      setValue(key, keyValue);
    } catch (e) {
      console.error(ERROR_MESSAGE);
    }
  };

  useEffect(() => {
    if (!storage) return;

    console.log(storage);

    try {
      const stringfiedValue = storage.getItem(key);
      console.log('stringfiedValue: ', stringfiedValue);
      if (stringfiedValue !== null) {
        setValue(JSON.parse(stringfiedValue));
      } else {
        setData(defaultValue);
      }
    } catch (e) {
      console.error(ERROR_MESSAGE);
    }
  }, [storage]);

  return [value, setValue];
}
