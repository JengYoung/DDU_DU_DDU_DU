import { useStorage } from './useStorage';

export function useSessionStorage(key, defaultValue) {
  return useStorage('sessionStorage', key, defaultValue);
}
