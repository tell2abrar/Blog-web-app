import { BlogTagChip } from 'styles';
import { BlogMetaData } from 'components';
import { UserDummyImage } from 'assets';
import { BlogContentProps } from 'types';
import { Box, Stack, Typography } from '@mui/material';
import { getFormatDateInDDMMYYYY } from 'utils';
import { BLOG_TEXT, READ_BLOG_TIME_TO_READ_TAG_CHIP } from 'styles/constants';

export const BlogContent = ({
  tag,
  date,
  text,
  image,
  title,
  duration,
  authorName
}: BlogContentProps) => (
  <>
    <Stack direction="row">
      <BlogTagChip sx={{ background: '#F2F8F7', color: '#666666' }}>{tag}</BlogTagChip>
      <BlogTagChip sx={READ_BLOG_TIME_TO_READ_TAG_CHIP}>{duration}</BlogTagChip>
    </Stack>
    <Typography variant="h1" sx={{ marginTop: '20px', fontSize: { xs: '20px', md: 'revert' } }}>
      {title}
    </Typography>
    <Box marginTop="19px">
      <BlogMetaData
        author={authorName}
        authorAvatar={UserDummyImage}
        date={getFormatDateInDDMMYYYY(date)}
      />
    </Box>
    <Box
      sx={{
        width: { xs: '100%', md: '856px' },
        height: { xs: '250px', md: '432px' },
        marginTop: '35px'
      }}
    >
      <img
        src={image}
        width="100%"
        height="100%"
        style={{ objectFit: 'cover', borderRadius: '5px', objectPosition: 'top' }}
      />
    </Box>
    <Typography sx={BLOG_TEXT}>{`${text}`}</Typography>
  </>
);
