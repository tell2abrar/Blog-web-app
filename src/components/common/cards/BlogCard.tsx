import { BlogTagChip } from 'styles';
import { BlogMetaData } from 'components';
import { BlogCardProps } from 'types';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import {
  PRIMARY_BLOG_CARD_TEXT,
  PRIMARY_BLOG_CARD_TITLE,
  PRIMARY_BLOG_CARD_IMAGE_CONTAINER
} from 'styles/constants';

export const BlogCard = ({
  tag,
  date,
  text,
  title,
  author,
  styles,
  duration,
  thumbnail,
  authorAvatar
}: BlogCardProps) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      sx={{ ...styles, ':hover': { cursor: 'pointer' }, maxWidth: { xs: '400px', md: '915px' } }}
    >
      <Stack direction={{ xs: 'column', md: 'row' }}>
        {isMobileView && <BlogTagChip sx={{ marginBottom: '10px' }}>{tag}</BlogTagChip>}

        <Box sx={PRIMARY_BLOG_CARD_IMAGE_CONTAINER}>
          <img
            src={thumbnail}
            width="100%"
            height="100%"
            style={{ objectFit: 'cover', borderRadius: '5px' }}
          />
        </Box>

        <Box sx={{ marginLeft: { xs: '0px', md: '34px' } }}>
          {!isMobileView && <BlogTagChip>{tag}</BlogTagChip>}

          <Typography
            variant="h2"
            sx={{ ...PRIMARY_BLOG_CARD_TITLE, fontSize: { xs: '18px', md: 'revert' } }}
          >
            {title}
          </Typography>

          <Box sx={{ marginTop: { xs: '5px', md: '10px' } }}>
            <BlogMetaData
              author={author}
              authorAvatar={authorAvatar}
              date={date}
              duration={duration}
            />
          </Box>

          <Box sx={{ marginTop: '10px' }}>
            <Typography sx={PRIMARY_BLOG_CARD_TEXT}>{text}</Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
