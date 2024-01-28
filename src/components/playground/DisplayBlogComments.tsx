import { Box, Stack, Typography } from '@mui/material';
import { DisplayBlogCommentsProps } from 'types';

export const DisplayBlogComments = ({ comments }: DisplayBlogCommentsProps) => (
  <Box sx={{ paddingLeft: '250px' }}>
    <Typography variant="h2">Blog Comments</Typography>

    <Stack sx={{ marginTop: '30px' }}>
      {comments.map((comment, index) => (
        <Typography key={comment + index}>
          <b> {index + 1}.</b> {comment}
        </Typography>
      ))}
    </Stack>
  </Box>
);
