import { Protected } from 'components';
import { RouteProps } from 'react-router-dom';
import { ROUTES_PATH } from '../constants';
import {
  Home,
  Signin,
  Signup,
  ReadBlog,
  Settings,
  Messenger,
  CreatePost,
  MyArticles,
  Playground,
  ReadBlogBySearch
} from 'pages';

export const mainRoutes: RouteProps[] = [
  {
    path: ROUTES_PATH.home,
    element: <Home />
  },
  {
    path: ROUTES_PATH.myArticles,
    element: (
      <Protected>
        <MyArticles />
      </Protected>
    )
  },
  {
    path: ROUTES_PATH.createPost,
    element: (
      <Protected>
        <CreatePost />
      </Protected>
    )
  },
  {
    path: ROUTES_PATH.settings,
    element: (
      <Protected>
        <Settings />
      </Protected>
    )
  },
  {
    path: ROUTES_PATH.messenger,
    element: (
      <Protected>
        <Messenger />
      </Protected>
    )
  },
  {
    path: `${ROUTES_PATH.readBlog}/:id`,
    element: <ReadBlog />
  },
  {
    path: `${ROUTES_PATH.readBlogBySearch}/:search`,
    element: <ReadBlogBySearch />
  },
  {
    path: ROUTES_PATH.playground,
    element: (
      <Protected>
        <Playground />
      </Protected>
    )
  }
];

export const authRoutes: RouteProps[] = [
  {
    path: ROUTES_PATH.signin,
    element: <Signin />
  },
  {
    path: ROUTES_PATH.signup,
    element: <Signup />
  }
];
