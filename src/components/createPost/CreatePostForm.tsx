import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupSchema } from 'formValidations';
import { uploadImage } from 'utils';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, MenuItem } from '@mui/material';
import { useCreatePostMutation } from 'generated';
import { InputFieldWrapper, PrimaryButton } from 'styles';
import { CREATE_POST_MIN_TO_READ_SELECT_OPTIONS, ROUTES_PATH } from '../../constants';
import {
  PrimaryLoader,
  PrimaryFilePicker,
  PrimaryInputField,
  SelectedImageCard,
  PrimarySelectField
} from 'components';

const schema = yupSchema.createPost;

export const CreatePostForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<File[]>();

  const {
    handleSubmit,
    control,
    formState: { dirtyFields }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      ...schema.getDefault(),
      minToRead: CREATE_POST_MIN_TO_READ_SELECT_OPTIONS[0].value
    }
  });

  const [createPost] = useCreatePostMutation({
    onCompleted: (data) => {
      setLoading(false);
      if (data.createPosts.response?.status === 201) {
        toast.success('Post created successfully');
        navigate(ROUTES_PATH.myArticles);
      }
    },
    onError: (error) => {
      setLoading(false);
      if (error.message.includes('Forbidden resource')) {
        toast.error('user is not logged in!');
      }
      toast.error(error.message);
    }
  });

  const onFormSubmit = async (values: any) => {
    setLoading(true);
    if (images) {
      const response = await uploadImage(images[0]);
      if (response?.data) {
        createPost({
          variables: {
            text: values.text.replace(/(\r\n|\r|\n)/g, '\n'),
            tag: values.tag,
            image: response.data.url,
            title: values.title,
            minutesToRead: values.minToRead
          }
        });
      } else {
        toast.error('Unable to create article');
        toast.error(response.response.data.error.message);
        setLoading(false);
      }
    }
  };

  return (
    <Box>
      <PrimaryLoader isLoading={loading} />
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <InputFieldWrapper sx={{ marginTop: '0px' }}>
          <PrimaryInputField name="title" control={control} label="Give it a title" />
        </InputFieldWrapper>

        <InputFieldWrapper>
          <PrimaryInputField name="tag" control={control} label="Give it a tag" />
        </InputFieldWrapper>

        <InputFieldWrapper>
          <PrimarySelectField name="minToRead" label="Min. to read" control={control}>
            {CREATE_POST_MIN_TO_READ_SELECT_OPTIONS.map((options, index) => (
              <MenuItem value={options.value} key={index + options.value}>
                {options.label}
              </MenuItem>
            ))}
          </PrimarySelectField>
        </InputFieldWrapper>

        <InputFieldWrapper>
          <PrimaryInputField
            name="text"
            control={control}
            label="Write something about it"
            props={{ multiline: true, rows: 6 }}
          />
        </InputFieldWrapper>

        <Box sx={{ marginTop: '40px' }}>
          {!images && (
            <PrimaryFilePicker
              label="Supports: JPG, JPEG2000, PNG"
              setFiles={setImages}
              buttonText="Browse"
              options={{
                accept: {
                  'image/*': []
                }
              }}
            />
          )}

          {images && (
            <SelectedImageCard
              fileName={images[0].name}
              onClickCloseButton={() => setImages(undefined)}
            />
          )}
        </Box>

        <Box sx={{ width: { xs: '250px', md: '356px' }, marginTop: '40px' }}>
          <PrimaryButton
            disabled={
              !(dirtyFields.text && dirtyFields.title && dirtyFields.tag) ||
              typeof images == 'undefined'
            }
            variant="contained"
            fullWidth
            type="submit"
          >
            Publish article
          </PrimaryButton>
        </Box>
      </form>
    </Box>
  );
};
