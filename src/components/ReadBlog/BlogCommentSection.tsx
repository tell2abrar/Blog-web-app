import { useAppContext } from 'contexts';
import { UserDummyImage } from 'assets';
import { getTimeFromNow } from 'utils';
import { CommentCardContainer } from 'styles';
import { Box, Stack, Typography } from '@mui/material';
import { AddComment, CommentCard } from 'components';
import { BlogCommentSectionProps } from 'types';
import { SIGN_IN_TO_COMMENT, TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';

export const BlogCommentSection = ({ postId, comments, onRefetch }: BlogCommentSectionProps) => {
  const { isLoggedIn } = useAppContext();
  return (
    <Box sx={{ minWidth: '100%' }}>
      <Stack direction="row" sx={TITLE_WITH_BORDER_BOTTOM}>
        <Typography
          variant="h1"
          sx={{ textTransform: 'none', fontSize: { xs: '18px', md: '27px' } }}
        >
          {comments.length > 1 ? `${comments.length} comments` : `${comments.length} comment`}
        </Typography>
        {!isLoggedIn && <Typography sx={SIGN_IN_TO_COMMENT}>Sign in to comment</Typography>}
      </Stack>

      {isLoggedIn && (
        <Box sx={{ marginTop: '60px' }}>
          <AddComment postId={postId} onRefetch={onRefetch} />
        </Box>
      )}

      <Box
        sx={{
          marginTop: '30px',
          flexGrow: '1'
        }}
      >
        {comments.map((comment) => (
          <CommentCardContainer key={comment.id}>
            <CommentCard
              id={comment.id}
              text={comment.text}
              avatar={UserDummyImage}
              postId={postId}
              isParent={true}
              userName={comment.user.name}
              totallReplies={comment.replyCount || 0}
              timeFromNow={getTimeFromNow(comment.createdAt)}
            />
          </CommentCardContainer>
        ))}
      </Box>
    </Box>
  );
};
