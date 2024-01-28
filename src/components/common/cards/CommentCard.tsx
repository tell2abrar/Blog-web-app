import toast from 'react-hot-toast';
import { useState } from 'react';
import { useAppContext } from 'contexts';
import { UserDummyImage } from 'assets';
import { getTimeFromNow } from 'utils';
import { CommentCardProps } from 'types';
import { useRepliesLazyQuery } from 'generated';
import { AddComment, PrimaryLoader } from 'components';
import { ReplyCommentCardContainer } from 'styles';
import { Box, Button, Stack, Typography } from '@mui/material';
import {
  COMMENT_CARD_TEXT,
  COMMENT_CARD_TIME,
  SHOW_REPLIES_BUTTON,
  COMMENT_CARD_USER_NAME,
  COMMENT_CARD_AVATAR_CONTAINER
} from 'styles/constants';

export const CommentCard = ({
  id,
  text,
  avatar,
  postId,
  userName,
  isParent = false,
  totallReplies,
  timeFromNow
}: CommentCardProps) => {
  const [showReplies, setShowReplies] = useState(false);
  const { isLoggedIn } = useAppContext();

  const [fetchReplies, { data, loading }] = useRepliesLazyQuery({
    onError: (error) => toast.error(error.message),
    fetchPolicy: 'cache-and-network'
  });

  const onRetchRepliesData = () => {
    fetchReplies({ variables: { commentId: id } });
  };

  return (
    <Stack direction="row">
      <PrimaryLoader isLoading={loading} />
      <Box sx={COMMENT_CARD_AVATAR_CONTAINER}>
        <img src={avatar} width="100%" style={{ borderRadius: '50%' }} />
      </Box>
      <Box sx={{ marginLeft: '16px', flexGrow: '1' }}>
        <Stack direction="row">
          <Typography sx={COMMENT_CARD_USER_NAME}>{userName}</Typography>
          <Typography sx={COMMENT_CARD_TIME}>{timeFromNow}</Typography>
        </Stack>
        <Typography sx={COMMENT_CARD_TEXT}>{text}</Typography>
        {!showReplies && totallReplies > 0 ? (
          <Button
            type="button"
            variant="text"
            sx={SHOW_REPLIES_BUTTON}
            onClick={() => {
              setShowReplies(!showReplies);
              fetchReplies({ variables: { commentId: id } });
            }}
          >
            Show replies ({totallReplies})
          </Button>
        ) : (
          <>
            <ReplyCommentCardContainer
              sx={{
                marginTop: totallReplies > 0 ? '18px' : '0px',
                paddingLeft: totallReplies > 0 ? '28px' : '0',
                borderLeft: totallReplies > 0 ? '2px solid rgba(102, 102, 102, 0.1)' : 'none'
              }}
            >
              {data?.replies.map((reply) => (
                <Box key={reply.id} sx={{ marginTop: '16px' }}>
                  <CommentCard
                    id={id}
                    text={reply.text}
                    avatar={UserDummyImage}
                    postId={postId}
                    isParent={false}
                    userName={reply.user.name}
                    totallReplies={reply.replyCount || 0}
                    timeFromNow={getTimeFromNow(reply.createdAt)}
                  />
                </Box>
              ))}
              {isLoggedIn && isParent && (
                <Box sx={{ marginTop: '45px' }}>
                  <AddComment
                    isReply
                    parentId={id}
                    postId={postId}
                    onRefetch={() => onRetchRepliesData()}
                  />
                </Box>
              )}
            </ReplyCommentCardContainer>
          </>
        )}
      </Box>
    </Stack>
  );
};
