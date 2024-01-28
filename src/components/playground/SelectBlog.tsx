import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { PrimaryAutoComplete } from 'components';
import { Box, Button, Typography } from '@mui/material';
import { Posts, useFindAllPostsLazyQuery } from 'generated';
import { useCallback, useEffect, useState } from 'react';
import { SelectBlogOption, SelectBlogProps } from 'types';

export const SelectBlog = ({ setComments }: SelectBlogProps) => {
  const [options, setOptions] = useState<SelectBlogOption[]>([]);
  const [blogsData, setBlogsData] = useState<Posts[]>([]);
  const [fetchOptions, setFetchOptions] = useState(true);
  const [totalOptions, setTotalOptions] = useState(0);
  const { control, handleSubmit } = useForm();

  const [findAllPosts, { loading }] = useFindAllPostsLazyQuery({
    onError: (error) => {
      setFetchOptions(false);
      toast.error(error.message);
    },
    onCompleted: (data) => {
      const newOptions =
        data?.findAllPosts.items.map((item) => {
          return { title: item.title, id: item.id };
        }) || [];
      setFetchOptions(false);
      setOptions((preOptions) => [...preOptions, ...newOptions]);
      setTotalOptions(data.findAllPosts.total);
      setBlogsData((preBlogsData) => [...preBlogsData, ...(data.findAllPosts.items as Posts[])]);
    },
    fetchPolicy: 'cache-and-network'
  });

  useEffect(() => {
    if (fetchOptions)
      findAllPosts({
        variables: {
          skip: options.length,
          take: 6
        }
      });
  }, [fetchOptions]);

  const fetchMoreData = useCallback(() => {
    setFetchOptions(true);
  }, []);

  const onFormSubmit = async (value: any) => {
    if (value.post) {
      const selectedBlog = blogsData?.find((blog) => blog.id === value.post.id);
      const comments = selectedBlog?.comments.map((comment) => comment.text);
      setComments(comments || []);
    }
  };

  return (
    <Box>
      <Typography variant="h2">Select Blog</Typography>
      <Box sx={{ marginTop: '20px' }}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <PrimaryAutoComplete
            name="post"
            control={control}
            loading={loading}
            options={options}
            placeholder="Select Blog"
            totalOptions={totalOptions}
            fetchMoreData={fetchMoreData}
          />
          <Button variant="contained" color="primary" type="submit" sx={{ marginTop: '25px' }}>
            Get Post Comments
          </Button>
        </form>
      </Box>
    </Box>
  );
};
