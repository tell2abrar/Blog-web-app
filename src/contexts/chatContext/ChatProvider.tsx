import { ChatProviderProps } from 'types';
import { SOCKET_EVENT_LISTENER } from '../../constants';
import { ChatContext, useAppContext } from 'contexts';
import { chatReducer, chatStoreDefaultValue } from 'reducers';
import { useEffect, useMemo, useReducer, useRef } from 'react';
import { addChat, addNewMessageInChat, updateCurrentUser, updateOnlineUsers } from 'actions';

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const { socketConnection } = useAppContext();
  const [chatStore, dispatchChatAction] = useReducer(chatReducer, chatStoreDefaultValue);
  const chatStoreRef = useRef(chatStore);

  const store = useMemo(() => {
    return { ...chatStore, dispatchChatAction };
  }, [chatStore]);

  useEffect(() => {
    socketConnection?.on(SOCKET_EVENT_LISTENER.onlineUsers, (data: any) => {
      dispatchChatAction(updateOnlineUsers(data, socketConnection.id));
      dispatchChatAction(updateCurrentUser(data, socketConnection.id));
    });

    socketConnection?.on(SOCKET_EVENT_LISTENER.groupChat, (data) => {
      dispatchChatAction(addChat(data, chatStoreRef));
    });

    socketConnection?.on(SOCKET_EVENT_LISTENER.chat, (data) => {
      console.log('Got updated state in event listerner using ref: ', chatStoreRef);
      dispatchChatAction(addNewMessageInChat(data, chatStoreRef));
    });

    return () => {
      socketConnection?.off(SOCKET_EVENT_LISTENER.chat);
      socketConnection?.off(SOCKET_EVENT_LISTENER.groupChat);
      socketConnection?.off(SOCKET_EVENT_LISTENER.onlineUsers);
      socketConnection?.disconnect();
    };
  }, [socketConnection]);

  return <ChatContext.Provider value={{ ...store }}>{children}</ChatContext.Provider>;
};
