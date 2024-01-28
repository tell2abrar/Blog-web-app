import toast from 'react-hot-toast';
import { BLOGS_PER_PAGE } from '../constants';
import { Box, Typography } from '@mui/material';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';
import { Posts, useFindAllPostsQuery } from 'generated';
import { BlogCardSkeleton, BlogCardsList } from 'components';

export const Home = () => {
  const {
    data: allPosts,
    loading,
    refetch
  } = useFindAllPostsQuery({
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
        Recent Posts
      </Typography>
      <Box sx={{ marginTop: '48px' }}>
        <BlogCardsList
          paginate
          onRefetch={onRefetch}
          perPage={BLOGS_PER_PAGE}
          total={allPosts?.findAllPosts.total || 0}
          data={(allPosts?.findAllPosts.items as Posts[]) || []}
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
