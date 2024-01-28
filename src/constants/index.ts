import { HeaderNavLinkType } from 'types';

export const BLOGII_AUTH_TOKEN_KEY = 'auth_token';

export const BLOGS_PER_PAGE = 3;

export const ROUTES_PATH = {
  home: '/',
  signin: '/signin',
  signup: '/signup',
  readBlog: '/read',
  settings: '/settings',
  messenger: '/messenger',
  createPost: '/create',
  myArticles: '/my-articles',
  playground: '/playground',
  readBlogBySearch: '/read-by-search'
};

export const CREATE_POST_MIN_TO_READ_SELECT_OPTIONS = [
  {
    value: '1 Min. To Read',
    label: '1 Min. To Read'
  },
  {
    value: '2 Mins. To Read',
    label: '2 Mins. To Read'
  },
  {
    value: '3 Mins. To Read',
    label: '3 Mins. To Read'
  },
  {
    value: '4 Mins. To Read',
    label: '4 Mins. To Read'
  },
  {
    value: '5 Mins. To Read',
    label: '5 Mins. To Read'
  }
];

export const HEADER_NAV_LINKS: HeaderNavLinkType[] = [
  {
    id: 1,
    to: ROUTES_PATH.home,
    text: 'Home',
    isProtected: false
  },
  {
    id: 2,
    to: ROUTES_PATH.myArticles,
    text: 'My Articles',
    isProtected: true
  },
  {
    id: 3,
    to: ROUTES_PATH.messenger,
    text: 'Messenger',
    isProtected: true
  },
  {
    id: 4,
    to: ROUTES_PATH.playground,
    text: 'Playground',
    isProtected: true
  }
];

export const MOBILE_HEADER_NAV_LINKS: HeaderNavLinkType[] = [
  {
    id: 1,
    to: ROUTES_PATH.home,
    text: 'Home',
    isProtected: false
  },
  {
    id: 2,
    to: ROUTES_PATH.myArticles,
    text: 'My Articles',
    isProtected: true
  },
  {
    id: 3,
    to: ROUTES_PATH.createPost,
    text: 'Create Article',
    isProtected: true
  },
  {
    id: 4,
    to: ROUTES_PATH.settings,
    text: 'Settings',
    isProtected: true
  }
];

export const CLOUDINARY_IMAGE_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`;

export enum SOCKET_EVENT_LISTENER {
  chat = 'chat',
  groupChat = 'groupChat',
  onlineUsers = 'onlineUsers'
}

export enum SOCKET_EVENT_EMITTER {
  joinRoom = 'joinRoom',
  sendMessage = 'sendMessage'
}
