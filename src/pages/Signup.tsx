import { Box } from '@mui/material';
import { SignupForm } from 'components';
import { AuthPageFormContainer, AuthPageHeading, AuthPageSubHeading } from 'styles';

export const Signup = () => (
  <Box>
    <AuthPageHeading>Create an account</AuthPageHeading>
    <AuthPageSubHeading to="/signin">Already have an account? Log in</AuthPageSubHeading>
    <AuthPageFormContainer>
      <SignupForm />
    </AuthPageFormContainer>
  </Box>
);
