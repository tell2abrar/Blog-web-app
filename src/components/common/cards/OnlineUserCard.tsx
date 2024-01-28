import { StyledBadge } from 'styles';
import { UserDummyImage } from 'assets';
import { useChatContext } from 'contexts';
import { OnlineUserCardProps } from 'types';
import { Stack, Typography, Avatar } from '@mui/material';
import { CHAT_NOTIFICATION, COMMENT_CARD_USER_NAME } from 'styles/constants';

export const OnlineUserCard = ({ onlineUser }: OnlineUserCardProps) => {
  const { chats } = useChatContext();

  const notifications =
    chats.find((chat) => chat.roomName.includes(onlineUser.userId))?.notifications || 0;

  return (
    <Stack
      direction="row"
      sx={{
        ':hover': { cursor: 'pointer' }
      }}
    >
      <StyledBadge
        overlap="circular"
        variant="dot"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Avatar alt={onlineUser.name} src={UserDummyImage} />
      </StyledBadge>

      <Stack sx={{ marginLeft: '10px' }}>
        <Typography sx={COMMENT_CARD_USER_NAME}>
          {onlineUser.name}
          {notifications > 0 && <span style={CHAT_NOTIFICATION}>{`${notifications}`}</span>}
        </Typography>

        <Typography
          sx={{
            ...COMMENT_CARD_USER_NAME,
            textTransform: 'lowercase',
            color: '#666666'
          }}
        >
          online
        </Typography>
      </Stack>
    </Stack>
  );
};
