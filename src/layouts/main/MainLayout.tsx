import { Header } from 'components';
import { Outlet } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

export const MainLayout = () => (
  <Stack justifyContent="space-between">
    <Header />
    <Box
      sx={{
        padding: { xs: '30px 20px', md: '68px 120px' }
      }}
    >
      <Outlet />
    </Box>
  </Stack>
);
