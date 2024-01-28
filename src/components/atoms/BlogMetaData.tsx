import { Calender, Clock } from 'assets';
import { BlogMetaDataProps } from 'types';
import { PRIMARY_BLOG_CARD_META_DATA_DIVIDER } from 'styles/constants';
import { Box, Divider, Stack, useMediaQuery, useTheme } from '@mui/material';
import { BlogCardMetaDataIconContainer, BlogCardMetaText } from 'styles';

export const BlogMetaData = ({ author, authorAvatar, date, duration }: BlogMetaDataProps) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack direction="row" alignItems="center">
      <Stack direction="row" alignItems="center">
        <Box sx={{ width: '18px', height: '18px' }}>
          <img src={authorAvatar} width="100%" style={{ borderRadius: '50%' }} />
        </Box>
        <BlogCardMetaText>{author}</BlogCardMetaText>
      </Stack>

      <Divider
        orientation="vertical"
        flexItem
        variant="middle"
        sx={PRIMARY_BLOG_CARD_META_DATA_DIVIDER}
      />

      <Stack direction="row" alignItems="center" sx={{ marginLeft: '10px' }}>
        <BlogCardMetaDataIconContainer>
          <Calender />
        </BlogCardMetaDataIconContainer>
        <BlogCardMetaText>{date}</BlogCardMetaText>
      </Stack>

      {duration && !isMobileView && (
        <>
          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            sx={PRIMARY_BLOG_CARD_META_DATA_DIVIDER}
          />

          <Stack direction="row" alignItems="center" sx={{ marginLeft: '10px' }}>
            <BlogCardMetaDataIconContainer>
              <Clock />
            </BlogCardMetaDataIconContainer>
            <BlogCardMetaText>{duration}</BlogCardMetaText>
          </Stack>
        </>
      )}
    </Stack>
  );
};
