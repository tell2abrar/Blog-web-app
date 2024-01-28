import { toast } from 'react-hot-toast';
import { useDropzone } from 'react-dropzone';
import { PrimaryFilePickerProps } from 'types';
import { Box, Button, Stack, Typography } from '@mui/material';
import { FILE_PICKER_BUTTON, FILE_PICKER_LABEL } from 'styles/constants';

export const PrimaryFilePicker = ({
  label,
  options,
  setFiles,
  buttonText
}: PrimaryFilePickerProps) => {
  const { getRootProps, getInputProps } = useDropzone({
    ...options,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) setFiles(acceptedFiles);
    },
    onDropRejected: (frObject) => {
      toast.error(frObject[0].errors[0].message);
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  return (
    <Stack direction="row" alignItems="center">
      <Button
        {...getRootProps({
          draggable: true,
          variant: 'outlined',
          sx: FILE_PICKER_BUTTON
        })}
      >
        <input {...getInputProps()} />
        {buttonText}
      </Button>

      <Box sx={{ marginLeft: '13px' }}>
        <Typography sx={FILE_PICKER_LABEL}>{label}</Typography>
      </Box>
    </Stack>
  );
};
