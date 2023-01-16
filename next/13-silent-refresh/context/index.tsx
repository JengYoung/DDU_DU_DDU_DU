import React, { PropsWithChildren } from 'react';
import { UserAuthProvider } from './UserAuth';

export default function ContextProvider({ children }: PropsWithChildren) {
  return <UserAuthProvider>{children}</UserAuthProvider>;
}
