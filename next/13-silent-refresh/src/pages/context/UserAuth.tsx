import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

const initialState = {
  access_token: null,
  expires_in: null,
  id_token: null,
  scope: null,
  token_type: null,
};

interface UserAuthContextInterface {
  user: typeof initialState;
  setUser: Dispatch<SetStateAction<typeof initialState>>;
}

export const UserAuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState(initialState);

  return <UserAuthContext.Provider value={{ user, setUser }}>{children}</UserAuthContext.Provider>;
};

export const UserAuthContext = createContext<UserAuthContextInterface>({
  user: initialState,
  setUser: () => {},
});
