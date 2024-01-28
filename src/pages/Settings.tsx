import { SettingsForm } from 'components/settings';
import { Box, Typography } from '@mui/material';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';

export const Settings = () => (
  <Box>
    <Typography variant="h1" sx={TITLE_WITH_BORDER_BOTTOM}>
      Account Setting
    </Typography>

    <Box sx={{ marginTop: '55px' }}>
      <SettingsForm />
    </Box>
  </Box>
);
