import * as yup from 'yup';

const email = yup.string().default('').email('Email is invalid').required('Email is required');

const name = yup
  .string()
  .default('')
  .required('Name is required')
  .matches(/^[a-zA-z]{3,20} *[a-zA-z]{3,20}/, 'Full name required');

const password = yup
  .string()
  .default('')
  .required('Password is required')
  .min(8, 'Password is too short')
  .matches(
    /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
    'Must contain letters, numbers and specials characters '
  );

const text = yup.string().default('').required('Text is required');

const tag = yup.string().default('').required('Tag is required ');

const title = yup
  .string()
  .default('')
  .required('Title is required')
  .min(6, 'title should be of minimum 6 words')
  .max(120, 'title should be of maximum of 120 words');

const minToRead = yup.string().required('Minutes to read is required');

const signUp = yup.object({
  name,
  email,
  password
});

const signIn = yup.object({
  email,
  password
});

const createPost = yup.object({
  tag,
  text,
  title,
  minToRead
});

const createComment = yup.object({
  text
});

export const yupSchema = {
  signIn,
  signUp,
  createPost,
  createComment
};
