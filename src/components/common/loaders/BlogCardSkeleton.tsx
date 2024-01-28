import { Box, Skeleton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

export const BlogCardSkeleton = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box sx={{ maxWidth: { xs: '400px', md: '915px' }, height: '180x' }}>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        {isMobileView && (
          <Skeleton>
            <Typography>Tag</Typography>
          </Skeleton>
        )}

        <Skeleton
          variant="rectangular"
          sx={{ width: { xs: '100%', md: '266px' }, height: { xs: '250px', md: '180px' } }}
        />

        <Box sx={{ marginLeft: { xs: '0px', md: '34px' } }}>
          {!isMobileView && (
            <Skeleton>
              <Typography>Tag</Typography>
            </Skeleton>
          )}

          <Skeleton>
            <Typography>
              I Created a Developer Rap Video - Here s What I Learned from it. Check it out
            </Typography>
            <Typography>Learned from it. Check it out</Typography>
          </Skeleton>

          <Box sx={{ marginTop: { xs: '5px', md: '10px' } }}>
            <Skeleton>
              <Typography>Jesica koli | 02 december 2022</Typography>
            </Skeleton>
          </Box>

          {!isMobileView && (
            <Box sx={{ marginTop: { xs: '0px', md: '20px' } }}>
              <Skeleton>
                <Typography>
                  Did you come here for something in particular or just general Riker-bashing? And
                  blowing into maximum warp
                </Typography>
              </Skeleton>
            </Box>
          )}
        </Box>
      </Stack>
    </Box>
  );
};
