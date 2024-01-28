import { ChatContextType } from 'types';
import { chatStoreDefaultValue } from 'reducers';
import { createContext, useContext } from 'react';

export const ChatContext = createContext<ChatContextType>({
  ...chatStoreDefaultValue,
  dispatchChatAction: () => {}
});

export const useChatContext = () => useContext(ChatContext);
