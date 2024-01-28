import { CreatePostForm } from 'components';
import { Box, Typography } from '@mui/material';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';

export const CreatePost = () => (
  <Box>
    <Typography variant="h1" sx={TITLE_WITH_BORDER_BOTTOM}>
      Create new article
    </Typography>
    <Box sx={{ marginTop: '85px' }}>
      <CreatePostForm />
    </Box>
  </Box>
);
