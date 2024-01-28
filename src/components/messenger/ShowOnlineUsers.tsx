import { Divider } from '@mui/material';
import { Fragment, memo } from 'react';
import { OnlineUserCard } from 'components';
import { ShowOnlineUsersProps } from 'types';
import { ShowOnlineUserCardContainer, ShowOnlineUserCardMask } from 'styles';

const ShowOnlineUsers = ({
  onlineUsers,
  onSelectChatThread,
  selectedChatThread
}: ShowOnlineUsersProps) => (
  <>
    {onlineUsers.map((onlineUser) => (
      <Fragment key={onlineUser.socketId + onlineUser.userId}>
        <ShowOnlineUserCardContainer
          onClick={() => onSelectChatThread(onlineUser)}
          sx={{
            backgroundColor: selectedChatThread === onlineUser.userId ? '#E5E5E5' : 'initial'
          }}
        >
          <ShowOnlineUserCardMask
            sx={{
              transform:
                selectedChatThread === onlineUser.userId
                  ? 'translate(2px, -1px)'
                  : 'translateX(0,0)',
              borderRight: selectedChatThread === onlineUser.userId ? '2px solid #E5E5E5' : ''
            }}
          />
          <OnlineUserCard onlineUser={onlineUser} />
        </ShowOnlineUserCardContainer>
        <Divider />
      </Fragment>
    ))}
  </>
);

export default memo(ShowOnlineUsers);
