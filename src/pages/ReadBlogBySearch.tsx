import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';
import { BLOGS_PER_PAGE, ROUTES_PATH } from '../constants';
import { Posts, useGetPostsLazyQuery } from 'generated';
import { BlogCardSkeleton, BlogCardsList } from 'components';

export const ReadBlogBySearch = () => {
  const navigate = useNavigate();
  const { search } = useParams();

  const [getPosts, { data: allPosts, loading }] = useGetPostsLazyQuery({
    variables: { search: search || '' },
    onError: (error) => {
      navigate(ROUTES_PATH.home);
      toast.error(error.message);
    }
  });

  useEffect(() => {
    if (search) {
      getPosts({ variables: { search } });
    } else {
      navigate(ROUTES_PATH.home);
    }
  }, [search]);

  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          ...TITLE_WITH_BORDER_BOTTOM,
          color: 'rgba(102, 102, 102, 0.8)',
          fontSize: '17px',
          fontWeight: '400'
        }}
      >
        Search results for <span style={{ color: '#222222' }}>{search}</span>
      </Typography>

      <Typography sx={{ marginTop: '20px' }}>
        Total: <b>{allPosts?.getPosts.length || 0}</b>
      </Typography>

      <Box sx={{ marginTop: '48px' }}>
        <BlogCardsList
          data={(allPosts?.getPosts as Posts[]) || []}
          total={allPosts?.getPosts.length || 0}
          paginate={false}
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
