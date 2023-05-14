import { useStorage } from './useStorage';

export function useLocalStorage(key, defaultValue) {
  return useStorage('localStorage', key, defaultValue);
}
