import { SELECTED_IMAGE_NAME } from 'styles/constants';
import { Box, Stack, Typography } from '@mui/material';
import { SelectedImageCardProps } from 'types';
import { UploadBlogCardImage, X } from 'assets';
import { CANCEL_SELECTED_IMAGE_BUTTON_CONTAINER } from 'styles';

export const SelectedImageCard = ({ fileName, onClickCloseButton }: SelectedImageCardProps) => (
  <Stack direction="row">
    <Box sx={{ width: '24px', height: '24px' }}>
      <img src={UploadBlogCardImage} width="100%" />
    </Box>
    <Typography sx={SELECTED_IMAGE_NAME}>{fileName}</Typography>
    <CANCEL_SELECTED_IMAGE_BUTTON_CONTAINER onClick={onClickCloseButton}>
      <img src={X} width="100%" />
    </CANCEL_SELECTED_IMAGE_BUTTON_CONTAINER>
  </Stack>
);
