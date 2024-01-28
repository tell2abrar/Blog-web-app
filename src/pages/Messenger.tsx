import { OnlineUser } from 'types';
import { Chat_Action } from 'reducers';
import { useCallback } from 'react';
import { SOCKET_EVENT_EMITTER } from '../constants';
import { Box, Stack, Typography } from '@mui/material';
import { ChatBox, ShowOnlineUsers } from 'components';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';
import { useAppContext, useChatContext } from 'contexts';
import { ChatBoxContainer, ShowOnlineUsersContainer } from 'styles';

export const Messenger = () => {
  const { socketConnection } = useAppContext();
  const { chats, onlineUsers, currentOnlineUser, selectedChatThread, dispatchChatAction } =
    useChatContext();

  const onSelectChatThread = useCallback(
    (onlineUser: OnlineUser) => {
      if (currentOnlineUser) {
        socketConnection?.emit(SOCKET_EVENT_EMITTER.joinRoom, {
          userId: currentOnlineUser.userId,
          roomName: `${currentOnlineUser.userId}&${onlineUser.userId}`,
          userName: currentOnlineUser.name,
          senderSocketId: currentOnlineUser.socketId,
          receiverSocketId: onlineUser.socketId
        });
      }

      dispatchChatAction({
        type: Chat_Action.ON_UPDATE_SELECTED_CHAT_THREAD,
        payload: {
          userId: onlineUser.userId
        }
      });
    },
    [socketConnection]
  );

  const getChatBoxProps = () => {
    const chat = chats.find((chat) => chat.roomName.includes(selectedChatThread));
    const otherUser = onlineUsers.find((onlineUser) => onlineUser.userId === selectedChatThread);
    const currentUser = currentOnlineUser;
    return chat && otherUser && currentUser ? { chat, otherUser, currentUser } : undefined;
  };

  return (
    <Box>
      <Typography variant="h1" sx={TITLE_WITH_BORDER_BOTTOM}>
        Messenger
      </Typography>

      {onlineUsers.length > 0 ? (
        <Stack direction="row" justifyContent="space-between">
          <ShowOnlineUsersContainer>
            <ShowOnlineUsers
              onlineUsers={onlineUsers}
              onSelectChatThread={onSelectChatThread}
              selectedChatThread={selectedChatThread}
            />
          </ShowOnlineUsersContainer>

          {selectedChatThread !== ' ' && (
            <ChatBoxContainer>
              <ChatBox data={getChatBoxProps()} />
            </ChatBoxContainer>
          )}
        </Stack>
      ) : (
        <Typography sx={{ marginTop: '40px' }}>
          No one is online at this moment &nbsp; :-(
        </Typography>
      )}
    </Box>
  );
};
