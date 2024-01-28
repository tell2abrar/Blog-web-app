import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';
import { DisplayBlogComments, SelectBlog } from 'components';

export const Playground = () => {
  const [comments, setComments] = useState<string[]>([]);

  return (
    <Box>
      <Typography variant="h1" sx={TITLE_WITH_BORDER_BOTTOM}>
        Play ground: For Developers Only
      </Typography>

      <Stack direction="row" sx={{ marginTop: '35px' }}>
        <Box sx={{ width: '30%' }}>
          <SelectBlog setComments={setComments} />
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <DisplayBlogComments comments={comments} />
        </Box>
      </Stack>
    </Box>
  );
};
