import { PrimaryLoaderProps } from 'types';
import { Backdrop, Box, CircularProgress } from '@mui/material';

export const PrimaryLoader = ({ isLoading }: PrimaryLoaderProps) => (
  <Box>
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  </Box>
);
