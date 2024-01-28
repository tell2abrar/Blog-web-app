import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { InputFieldWrapper, PrimaryButton } from 'styles';
import {
  PrimaryFilePicker,
  PrimaryInputField,
  SelectedImageCard,
  PrimaryPasswordField
} from 'components';

export const SettingsForm = () => {
  const [images, setImages] = useState<File[]>();
  const {
    handleSubmit,
    control,
    formState: { dirtyFields }
  } = useForm({
    defaultValues: {
      name: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onFormSubmit = async (values: any) => {
    console.log('values', values);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Typography variant="h2" sx={{ fontWeight: '500' }}>
          Change Username
        </Typography>

        <InputFieldWrapper sx={{ marginTop: '45px' }}>
          <PrimaryInputField name="name" control={control} label="Username" />
        </InputFieldWrapper>

        <Typography variant="h2" sx={{ marginTop: '50px', fontWeight: '500' }}>
          Change password
        </Typography>

        <InputFieldWrapper sx={{ marginTop: '45px' }}>
          <PrimaryPasswordField control={control} label="New Password" name="password" />
        </InputFieldWrapper>

        <InputFieldWrapper sx={{ marginTop: '45px' }}>
          <PrimaryPasswordField control={control} label="Confirm Password" name="confirmPassword" />
        </InputFieldWrapper>

        <Typography variant="h2" sx={{ marginTop: '50px', fontWeight: '500' }}>
          Change Avatar
        </Typography>

        <Box sx={{ marginTop: '20px' }}>
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

        <Box sx={{ width: { xs: '250px', md: '356px' }, marginTop: '55px' }}>
          <PrimaryButton
            disabled={
              !(dirtyFields.password && dirtyFields.confirmPassword) &&
              !dirtyFields.name &&
              typeof images == 'undefined'
            }
            variant="contained"
            fullWidth
            type="submit"
          >
            Save Changes
          </PrimaryButton>
        </Box>
      </form>
    </Box>
  );
};
