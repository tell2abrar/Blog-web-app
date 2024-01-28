import { Socket } from 'socket.io-client';
import { AppContext } from 'contexts';
import { AppProviderProps } from 'types';
import { getToken, isToken } from 'utils';
import { createSocketConnection } from 'socket';
import { useEffect, useRef, useState } from 'react';

export const AppProvider = ({ children }: AppProviderProps) => {
  const isSocketConnectionAlreadyEstablished = useRef<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isToken());
  const [socketConnection, setSocketConnection] = useState<Socket | undefined>();

  useEffect(() => {
    if (
      isLoggedIn &&
      typeof socketConnection === 'undefined' &&
      !isSocketConnectionAlreadyEstablished.current
    ) {
      isSocketConnectionAlreadyEstablished.current = true;
      const socket = createSocketConnection(getToken() || '');
      setSocketConnection(socket);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, socketConnection, setSocketConnection }}
    >
      {children}
    </AppContext.Provider>
  );
};
