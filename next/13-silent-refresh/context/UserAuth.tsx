import {
  createContext,
  Dispatch,
  MutableRefObject,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

const initialState = {
  access_token: null,
  expires_in: null,
  id_token: null,
  scope: null,
  token_type: null,
};

export const UserAuthContext = createContext<UserAuthContextInterface>({
  user: initialState,
  setUser: () => {},
  checked: false,
});

export const useUserAuthContext = () => useContext(UserAuthContext);

interface UserAuthContextInterface {
  user: typeof initialState;
  setUser: Dispatch<SetStateAction<typeof initialState>>;
  checked: boolean;
}

export const UserAuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState(initialState);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    async function getToken() {
      const tokenCaches = await caches.open('tokens');
      const cachedTokenAPI = await tokenCaches.match('/auth/user');

      if (cachedTokenAPI) {
        const userData = await cachedTokenAPI.json();
        setUser(() => userData);
      }

      setChecked(() => true);
    }

    getToken();
  }, []);

  return (
    <UserAuthContext.Provider value={{ user, setUser, checked }}>
      {children}
    </UserAuthContext.Provider>
  );
};
