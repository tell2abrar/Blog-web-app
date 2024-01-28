import toast from 'react-hot-toast';
import { useAuth } from 'customHooks';
import { useForm } from 'react-hook-form';
import { yupSchema } from 'formValidations';
import { ROUTES_PATH } from '../../../constants';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSignInMutation } from 'generated';
import { DONT_HAVE_ACCOUNT_SX } from 'styles/constants';
import { Box, Divider, Typography } from '@mui/material';
import { PrimaryButton, ForgetPasswordLink, InputFieldWrapper } from 'styles';
import {
  PrimaryLoader,
  PrimaryCheckbox,
  PrimaryInputField,
  PrimaryPasswordField
} from 'components';

const schema = yupSchema.signIn;

export const SigninForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    handleSubmit,
    control,
    formState: { dirtyFields }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      rememberMe: true,
      ...schema.getDefault()
    }
  });

  const [signIn, { loading: signInLoading }] = useSignInMutation({
    onError: (error: any) => {
      toast.error(error.graphQLErrors[0].extensions?.response.message.message);
    }
  });

  const onFormSubmit = async (values: any) => {
    const response = await signIn({
      variables: {
        email: values.email,
        password: values.password
      }
    });
    if (response.data?.signIn) {
      login(values.rememberMe && response.data.signIn.accesstoken);
      navigate(ROUTES_PATH.home);
    }
  };

  return (
    <Box sx={{ marginTop: { xs: '35px', md: '74px' } }}>
      <PrimaryLoader isLoading={signInLoading} />
      <Box>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <InputFieldWrapper sx={{ marginTop: '0px' }}>
            <PrimaryInputField name="email" control={control} label="Email address or user name" />
          </InputFieldWrapper>

          <InputFieldWrapper sx={{ marginTop: '50px' }}>
            <PrimaryPasswordField control={control} label="Password" name="password" />
            <ForgetPasswordLink to="#">Forget your password</ForgetPasswordLink>
          </InputFieldWrapper>

          <PrimaryCheckbox control={control} name="rememberMe" label="Remember me" />

          <Box sx={{ marginTop: { xs: '20px', md: '40px' } }}>
            <PrimaryButton
              variant="contained"
              fullWidth
              disabled={!(dirtyFields.email && dirtyFields.password)}
              type="submit"
            >
              Log in
            </PrimaryButton>
          </Box>
        </form>
      </Box>

      <Divider sx={{ marginTop: '40px', borderBottom: '2px solid #E5E5E5' }} />

      <Box sx={{ marginTop: { xs: '20px', md: '40px' } }}>
        <Typography sx={DONT_HAVE_ACCOUNT_SX}>Don’t have an account?</Typography>
        <PrimaryButton
          variant="outlined"
          fullWidth
          onClick={() => navigate(ROUTES_PATH.signup)}
          sx={{ marginTop: '20px' }}
        >
          Sign up
        </PrimaryButton>
      </Box>
    </Box>
  );
};
