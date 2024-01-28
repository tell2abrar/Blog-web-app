import { toast } from 'react-hot-toast';
import { BLOGS_PER_PAGE } from '../constants';
import { Box, Typography } from '@mui/material';
import { Posts, useMyPostsQuery } from 'generated';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';
import { BlogCardSkeleton, BlogCardsList } from 'components';

export const MyArticles = () => {
  const {
    data: allPosts,
    loading,
    refetch
  } = useMyPostsQuery({
    variables: {
      skip: 0,
      take: BLOGS_PER_PAGE
    },
    onError: (error) => toast.error(error.message),
    fetchPolicy: 'cache-and-network'
  });

  const onRefetch = (page: number) => {
    refetch({ skip: BLOGS_PER_PAGE * (page - 1), take: BLOGS_PER_PAGE });
  };

  return (
    <Box>
      <Typography variant="h1" sx={TITLE_WITH_BORDER_BOTTOM}>
        My Articles
      </Typography>

      <Typography sx={{ marginTop: '20px' }}>
        Results: <b>{allPosts?.myPosts.total}</b>
      </Typography>

      <Box sx={{ marginTop: '48px' }}>
        <BlogCardsList
          paginate
          onRefetch={onRefetch}
          perPage={BLOGS_PER_PAGE}
          total={allPosts?.myPosts.total || 0}
          data={(allPosts?.myPosts.items as Posts[]) || []}
        />

        {loading &&
          [...Array(BLOGS_PER_PAGE)].map((_, index) => {
            return (
              <Box sx={{ marginTop: index === 0 ? '0px' : '48px' }} key={index}>
                <BlogCardSkeleton />
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};
