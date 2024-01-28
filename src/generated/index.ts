import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AllPostsType = {
  __typename?: 'AllPostsType';
  items: Array<Posts>;
  total: Scalars['Float'];
};

export type Comments = {
  __typename?: 'Comments';
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  parentId?: Maybe<Scalars['Float']>;
  postsId?: Maybe<Scalars['Float']>;
  replyCount?: Maybe<Scalars['Float']>;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: Users;
  userId?: Maybe<Scalars['String']>;
};

export type CreateCommentDto = {
  parentId?: InputMaybe<Scalars['Float']>;
  postId: Scalars['Float'];
  text: Scalars['String'];
};

export type CreatePostDto = {
  image: Scalars['String'];
  minutesToRead: Scalars['String'];
  tag: Scalars['String'];
  text: Scalars['String'];
  title: Scalars['String'];
};

export type CreatePostsResponsePayload = {
  __typename?: 'CreatePostsResponsePayload';
  message: Scalars['String'];
  status: Scalars['Float'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Role>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: Comments;
  createPosts: PostPayload;
  deletePost: PostPayload;
  signIn: UserPayload;
  signUp: Users;
  updatePost: PostPayload;
  updateUser: Users;
};


export type MutationCreateCommentArgs = {
  createCommentDto: CreateCommentDto;
};


export type MutationCreatePostsArgs = {
  createPostDto: CreatePostDto;
};


export type MutationDeletePostArgs = {
  id: Scalars['Float'];
};


export type MutationSignInArgs = {
  user: SignInUserInput;
};


export type MutationSignUpArgs = {
  createUserInput: CreateUserInput;
};


export type MutationUpdatePostArgs = {
  id: Scalars['Float'];
  updatePostDto: UpdatePostDto;
};


export type MutationUpdateUserArgs = {
  updateUser: UpdateUser;
};

export type PaginateInput = {
  skip: Scalars['Int'];
  take: Scalars['Int'];
};

export type PostPayload = {
  __typename?: 'PostPayload';
  post?: Maybe<Posts>;
  response?: Maybe<ResponseObject>;
};

export type Posts = {
  __typename?: 'Posts';
  comments: Array<Comments>;
  createdAt: Scalars['String'];
  id: Scalars['Float'];
  image?: Maybe<Scalars['String']>;
  minutesToRead?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
  user: Users;
  userId?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  findAllPosts: AllPostsType;
  findPostById: PostPayload;
  getPosts: Array<Posts>;
  hello: Scalars['String'];
  myPosts: AllPostsType;
  replies: Array<Comments>;
};


export type QueryFindAllPostsArgs = {
  paginationInput: PaginateInput;
};


export type QueryFindPostByIdArgs = {
  id: Scalars['Float'];
};


export type QueryGetPostsArgs = {
  search: Scalars['String'];
};


export type QueryMyPostsArgs = {
  paginationInput: PaginateInput;
};


export type QueryRepliesArgs = {
  commentId: Scalars['Float'];
};

export type ResponseObject = {
  __typename?: 'ResponseObject';
  error?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

/** user's role */
export enum Role {
  Admin = 'Admin',
  User = 'User'
}

export type SignInUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UpdatePostDto = {
  text: Scalars['String'];
};

export type UpdateUser = {
  avatar: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UserPayload = {
  __typename?: 'UserPayload';
  accesstoken: Scalars['String'];
  response: SignInResponsePayload;
};

export type Users = {
  __typename?: 'Users';
  avatar?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  roles?: Maybe<Role>;
  updatedAt: Scalars['String'];
};

export type SignInResponsePayload = {
  __typename?: 'signInResponsePayload';
  message: Scalars['String'];
  status: Scalars['Float'];
};

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String'];
  text: Scalars['String'];
  image: Scalars['String'];
  tag: Scalars['String'];
  minutesToRead: Scalars['String'];
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPosts: { __typename?: 'PostPayload', response?: { __typename?: 'ResponseObject', message?: string | null, error?: string | null, status?: number | null } | null, post?: { __typename?: 'Posts', id: number, title: string, text: string } | null } };

export type CreateCommentMutationVariables = Exact<{
  text: Scalars['String'];
  postId: Scalars['Float'];
  parentId?: InputMaybe<Scalars['Float']>;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'Comments', id: number, text: string, userId?: string | null, postsId?: number | null, parentId?: number | null, replyCount?: number | null } };

export type FindAllPostsQueryVariables = Exact<{
  skip: Scalars['Int'];
  take: Scalars['Int'];
}>;


export type FindAllPostsQuery = { __typename?: 'Query', findAllPosts: { __typename?: 'AllPostsType', total: number, items: Array<{ __typename?: 'Posts', id: number, title: string, text: string, image?: string | null, tag?: string | null, minutesToRead?: string | null, userId?: string | null, createdAt: string, user: { __typename?: 'Users', name: string, email: string }, comments: Array<{ __typename?: 'Comments', id: number, text: string, userId?: string | null, postsId?: number | null, parentId?: number | null, replyCount?: number | null, createdAt: any, user: { __typename?: 'Users', name: string, email: string } }> }> } };

export type MyPostsQueryVariables = Exact<{
  skip: Scalars['Int'];
  take: Scalars['Int'];
}>;


export type MyPostsQuery = { __typename?: 'Query', myPosts: { __typename?: 'AllPostsType', total: number, items: Array<{ __typename?: 'Posts', id: number, title: string, text: string, image?: string | null, tag?: string | null, minutesToRead?: string | null, userId?: string | null, createdAt: string, user: { __typename?: 'Users', name: string, email: string }, comments: Array<{ __typename?: 'Comments', id: number, text: string, userId?: string | null, postsId?: number | null, parentId?: number | null, replyCount?: number | null, createdAt: any, user: { __typename?: 'Users', name: string, email: string } }> }> } };

export type FindPostByIdQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type FindPostByIdQuery = { __typename?: 'Query', findPostById: { __typename?: 'PostPayload', response?: { __typename?: 'ResponseObject', message?: string | null, error?: string | null, status?: number | null } | null, post?: { __typename?: 'Posts', id: number, title: string, text: string, image?: string | null, tag?: string | null, minutesToRead?: string | null, userId?: string | null, createdAt: string, user: { __typename?: 'Users', name: string, email: string }, comments: Array<{ __typename?: 'Comments', id: number, text: string, userId?: string | null, postsId?: number | null, parentId?: number | null, replyCount?: number | null, createdAt: any, user: { __typename?: 'Users', name: string, email: string } }> } | null } };

export type RepliesQueryVariables = Exact<{
  commentId: Scalars['Float'];
}>;


export type RepliesQuery = { __typename?: 'Query', replies: Array<{ __typename?: 'Comments', id: number, text: string, userId?: string | null, postsId?: number | null, parentId?: number | null, replyCount?: number | null, createdAt: any, user: { __typename?: 'Users', name: string, email: string } }> };

export type GetPostsQueryVariables = Exact<{
  search: Scalars['String'];
}>;


export type GetPostsQuery = { __typename?: 'Query', getPosts: Array<{ __typename?: 'Posts', id: number, title: string, text: string, image?: string | null, tag?: string | null, minutesToRead?: string | null, userId?: string | null, createdAt: string, user: { __typename?: 'Users', name: string, email: string } }> };

export type SignUpMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'Users', name: string, email: string, password: string, roles?: Role | null } };

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'UserPayload', accesstoken: string, response: { __typename?: 'signInResponsePayload', status: number, message: string } } };


export const CreatePostDocument = gql`
    mutation createPost($title: String!, $text: String!, $image: String!, $tag: String!, $minutesToRead: String!) {
  createPosts(
    createPostDto: {title: $title, text: $text, image: $image, tag: $tag, minutesToRead: $minutesToRead}
  ) {
    response {
      message
      error
      status
    }
    post {
      id
      title
      text
    }
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      text: // value for 'text'
 *      image: // value for 'image'
 *      tag: // value for 'tag'
 *      minutesToRead: // value for 'minutesToRead'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const CreateCommentDocument = gql`
    mutation createComment($text: String!, $postId: Float!, $parentId: Float) {
  createComment(
    createCommentDto: {text: $text, postId: $postId, parentId: $parentId}
  ) {
    id
    text
    userId
    postsId
    parentId
    replyCount
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      text: // value for 'text'
 *      postId: // value for 'postId'
 *      parentId: // value for 'parentId'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const FindAllPostsDocument = gql`
    query findAllPosts($skip: Int!, $take: Int!) {
  findAllPosts(paginationInput: {skip: $skip, take: $take}) {
    total
    items {
      id
      title
      text
      image
      tag
      minutesToRead
      userId
      createdAt
      user {
        name
        email
      }
      comments {
        id
        text
        userId
        postsId
        parentId
        replyCount
        user {
          name
          email
        }
        createdAt
      }
      user {
        name
        email
      }
    }
  }
}
    `;

/**
 * __useFindAllPostsQuery__
 *
 * To run a query within a React component, call `useFindAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllPostsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindAllPostsQuery(baseOptions: Apollo.QueryHookOptions<FindAllPostsQuery, FindAllPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllPostsQuery, FindAllPostsQueryVariables>(FindAllPostsDocument, options);
      }
export function useFindAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllPostsQuery, FindAllPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllPostsQuery, FindAllPostsQueryVariables>(FindAllPostsDocument, options);
        }
export type FindAllPostsQueryHookResult = ReturnType<typeof useFindAllPostsQuery>;
export type FindAllPostsLazyQueryHookResult = ReturnType<typeof useFindAllPostsLazyQuery>;
export type FindAllPostsQueryResult = Apollo.QueryResult<FindAllPostsQuery, FindAllPostsQueryVariables>;
export const MyPostsDocument = gql`
    query myPosts($skip: Int!, $take: Int!) {
  myPosts(paginationInput: {skip: $skip, take: $take}) {
    total
    items {
      id
      title
      text
      image
      tag
      minutesToRead
      userId
      createdAt
      user {
        name
        email
      }
      comments {
        id
        text
        userId
        postsId
        parentId
        replyCount
        user {
          name
          email
        }
        createdAt
      }
      user {
        name
        email
      }
    }
  }
}
    `;

/**
 * __useMyPostsQuery__
 *
 * To run a query within a React component, call `useMyPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyPostsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useMyPostsQuery(baseOptions: Apollo.QueryHookOptions<MyPostsQuery, MyPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyPostsQuery, MyPostsQueryVariables>(MyPostsDocument, options);
      }
export function useMyPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyPostsQuery, MyPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyPostsQuery, MyPostsQueryVariables>(MyPostsDocument, options);
        }
export type MyPostsQueryHookResult = ReturnType<typeof useMyPostsQuery>;
export type MyPostsLazyQueryHookResult = ReturnType<typeof useMyPostsLazyQuery>;
export type MyPostsQueryResult = Apollo.QueryResult<MyPostsQuery, MyPostsQueryVariables>;
export const FindPostByIdDocument = gql`
    query findPostById($id: Float!) {
  findPostById(id: $id) {
    response {
      message
      error
      status
    }
    post {
      id
      title
      text
      image
      tag
      minutesToRead
      userId
      createdAt
      user {
        name
        email
      }
      comments {
        id
        text
        userId
        postsId
        parentId
        replyCount
        user {
          name
          email
        }
        createdAt
      }
    }
  }
}
    `;

/**
 * __useFindPostByIdQuery__
 *
 * To run a query within a React component, call `useFindPostByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPostByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPostByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindPostByIdQuery(baseOptions: Apollo.QueryHookOptions<FindPostByIdQuery, FindPostByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindPostByIdQuery, FindPostByIdQueryVariables>(FindPostByIdDocument, options);
      }
export function useFindPostByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPostByIdQuery, FindPostByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindPostByIdQuery, FindPostByIdQueryVariables>(FindPostByIdDocument, options);
        }
export type FindPostByIdQueryHookResult = ReturnType<typeof useFindPostByIdQuery>;
export type FindPostByIdLazyQueryHookResult = ReturnType<typeof useFindPostByIdLazyQuery>;
export type FindPostByIdQueryResult = Apollo.QueryResult<FindPostByIdQuery, FindPostByIdQueryVariables>;
export const RepliesDocument = gql`
    query replies($commentId: Float!) {
  replies(commentId: $commentId) {
    id
    text
    userId
    postsId
    parentId
    replyCount
    user {
      name
      email
    }
    createdAt
  }
}
    `;

/**
 * __useRepliesQuery__
 *
 * To run a query within a React component, call `useRepliesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRepliesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRepliesQuery({
 *   variables: {
 *      commentId: // value for 'commentId'
 *   },
 * });
 */
export function useRepliesQuery(baseOptions: Apollo.QueryHookOptions<RepliesQuery, RepliesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RepliesQuery, RepliesQueryVariables>(RepliesDocument, options);
      }
export function useRepliesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RepliesQuery, RepliesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RepliesQuery, RepliesQueryVariables>(RepliesDocument, options);
        }
export type RepliesQueryHookResult = ReturnType<typeof useRepliesQuery>;
export type RepliesLazyQueryHookResult = ReturnType<typeof useRepliesLazyQuery>;
export type RepliesQueryResult = Apollo.QueryResult<RepliesQuery, RepliesQueryVariables>;
export const GetPostsDocument = gql`
    query getPosts($search: String!) {
  getPosts(search: $search) {
    id
    title
    text
    image
    tag
    minutesToRead
    userId
    user {
      name
      email
    }
    createdAt
  }
}
    `;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export const SignUpDocument = gql`
    mutation signUp($name: String!, $email: String!, $password: String!) {
  signUp(createUserInput: {name: $name, email: $email, password: $password}) {
    name
    email
    password
    roles
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const SignInDocument = gql`
    mutation signIn($email: String!, $password: String!) {
  signIn(user: {email: $email, password: $password}) {
    accesstoken
    response {
      status
      message
    }
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;