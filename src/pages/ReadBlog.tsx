import toast from 'react-hot-toast';
import { Box } from '@mui/material';
import { ROUTES_PATH } from '../constants';
import { BlogThumbnail1 } from 'assets';
import { useNavigate, useParams } from 'react-router-dom';
import { Comments, useFindPostByIdQuery } from 'generated';
import { BlogCommentSection, BlogContent, PrimaryLoader } from 'components';

export const ReadBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: post,
    loading,
    refetch
  } = useFindPostByIdQuery({
    variables: {
      id: parseFloat(id || '0')
    },
    onError: (error) => {
      navigate(ROUTES_PATH.home);
      toast.error(error.message);
    }
  });

  const onRefetchBlogData = () => {
    refetch({ id: parseFloat(id || '0') });
  };

  return (
    <Box sx={{ maxWidth: '856px' }}>
      <PrimaryLoader isLoading={loading} />
      <BlogContent
        tag={post?.findPostById.post?.tag || 'miscellaneous'}
        date={post?.findPostById.post?.createdAt || ''}
        text={post?.findPostById.post?.text || ''}
        image={post?.findPostById.post?.image || BlogThumbnail1}
        title={post?.findPostById.post?.title || ''}
        duration={post?.findPostById.post?.minutesToRead || '1 Min. To Read'}
        authorName={post?.findPostById.post?.user.name || ''}
      />
      <Box sx={{ marginTop: '60px', minWidth: '100%' }}>
        <BlogCommentSection
          onRefetch={onRefetchBlogData}
          postId={post?.findPostById.post?.id || 0}
          comments={(post?.findPostById.post?.comments as Comments[]) || []}
        />
      </Box>
    </Box>
  );
};
