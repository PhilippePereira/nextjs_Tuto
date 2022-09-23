import { type } from 'os';
import React, { createContext, useState } from 'react';

interface IAuthContext {
  authenticated: boolean;
  login: () => void;
  logOut: () => void;
}

const defaultValue: IAuthContext = {
  authenticated: false,
  login: () => undefined,
  logOut: () => undefined,
};

type Props = {
  children?: React.ReactNode
};

const AuthContext = createContext<IAuthContext>(defaultValue);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(
    defaultValue.authenticated
  );
  const login = () => setAuthenticated(true);
  const logOut = () => setAuthenticated(false);

  return (
    <AuthContext.Provider value={{ authenticated, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
