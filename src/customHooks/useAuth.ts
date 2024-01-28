import { Chat_Action } from 'reducers';
import { useCallback } from 'react';
import { createSocketConnection } from 'socket';
import { removeToken, saveToken } from 'utils';
import { useAppContext, useChatContext } from 'contexts';

export const useAuth = () => {
  const { dispatchChatAction } = useChatContext();
  const { setIsLoggedIn, setSocketConnection, socketConnection } = useAppContext();

  const logout = useCallback(() => {
    removeToken();
    setIsLoggedIn(false);
    socketConnection?.disconnect();
    setSocketConnection(undefined);
    dispatchChatAction({ type: Chat_Action.ON_LOGOUT });
  }, []);

  const login = useCallback((token: string) => {
    saveToken(token);
    setIsLoggedIn(true);
    const socketConnection = createSocketConnection(token);
    setSocketConnection(socketConnection);
  }, []);

  return { logout, login };
};
