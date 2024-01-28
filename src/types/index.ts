import { Socket } from 'socket.io-client';
import { ChatAction } from 'reducers';
import { Comments, Posts } from 'generated';
import { DropzoneOptions } from 'react-dropzone';
import { BaseTextFieldProps, SxProps, Theme } from '@mui/material';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export type User = {
  name: string;
  userId: string;
  socketId: string;
};

export type NavigationButtonProps = {
  id: number;
  text: string;
  path?: string;
};

export type PrimarySelectFieldProps = {
  name: string;
  control: any;
  label: string;
  helperText?: string;
  props?: BaseTextFieldProps;
  children: ReactNode;
};

export type PrimaryPasswordFieldProps = {
  name: string;
  control: any;
  label: string;
  helperText?: string;
  placeholder?: string;
  props?: BaseTextFieldProps;
};

export type PrimaryInputFieldProps = {
  name: string;
  control: any;
  label: string;
  placeholder?: string;
  helperText?: string;
  props?: BaseTextFieldProps;
};

export type PrimaryCheckboxProps = {
  name: string;
  label: string;
  control: any;
};

export type ProtectedProps = {
  children: JSX.Element;
};

export type PasswordInputAdornmentProps = {
  showPassword: boolean;
  onhandleClickShowPassword: () => void;
};

export type BlogCardProps = {
  tag: string;
  date: string;
  text: string;
  title: string;
  author: string;
  duration: string;
  thumbnail: string;
  authorAvatar: string;
  styles?: SxProps<Theme>;
};

export type PrimaryLoaderProps = {
  isLoading: boolean;
};

export type PrimaryPaginationProps = {
  count: number;
  onReftech: (page: number) => void;
};

export type BlogCardsListProps = {
  data: Posts[];
  total: number;
  paginate: boolean;
  perPage?: number;
  onRefetch?: (page: number) => void;
};

export type BlogMetaDataProps = {
  date: string;
  author: string;
  duration?: string;
  authorAvatar: string;
};

export type CommentCardProps = {
  id: number;
  text: string;
  avatar: string;
  postId: number;
  userName: string;
  isParent?: boolean;
  totallReplies: number;
  timeFromNow: string;
};

export type BlogContentProps = {
  tag: string;
  date: string;
  text: string;
  image: string;
  title: string;
  duration: string;
  authorName: string;
};

export type BlogCommentSectionProps = {
  postId: number;
  onRefetch: () => void;
  comments: Comments[];
};

export type AddCommentProps = {
  postId: number;
  parentId?: number;
  isReply?: boolean;
  onRefetch: () => void;
};

export type HeaderNavLinkType = {
  id: number;
  to: string;
  text: string;
  isProtected: boolean;
};

export type NavLinksListProps = {
  data: HeaderNavLinkType[];
  isLoggedIn: boolean;
};

export type SelectedImageCardProps = {
  fileName: string;
  onClickCloseButton: () => void;
};

export type PrimaryFilePickerProps = {
  label: string;
  buttonText: string;
  setFiles: React.Dispatch<React.SetStateAction<File[] | undefined>>;
  options?: DropzoneOptions;
};

export type MobileHeaderProps = {
  isLoggedIn: boolean;
  logout: () => void;
};

export type DesktopHeaderProps = {
  isLoggedIn: boolean;
  logout: () => void;
};

export type AppContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  socketConnection: Socket | undefined;
  setSocketConnection: Dispatch<SetStateAction<Socket | undefined>>;
};

export type OnlineUser = {
  name: string;
  userId: string;
  socketId: string;
};

type Message = {
  time: string;
  message: string;
  senderId: string;
  receiverId: string;
};

export type Chat = {
  messages: Message[];
  roomName: string;
  notifications: number;
};

export type ChatContextType = {
  chats: Chat[];
  onlineUsers: OnlineUser[];
  currentOnlineUser: User | null;
  selectedChatThread: string;
  dispatchChatAction: React.Dispatch<ChatAction>;
};

export type ChatStore = {
  chats: Chat[];
  onlineUsers: OnlineUser[];
  currentOnlineUser: User | null;
  selectedChatThread: string;
};

export type ChatProviderProps = {
  children: ReactNode;
};

export type AppProviderProps = {
  children: ReactNode;
};

export type AutoCompleteProviderProps = {
  children: ReactNode;
  position: number;
  isLoading: boolean;
};

export type OnlineUserCardProps = {
  onlineUser: OnlineUser;
};

export type ShowOnlineUsersProps = {
  onlineUsers: OnlineUser[];
  selectedChatThread: string;
  onSelectChatThread: (onlineUser: OnlineUser) => void;
};

export type ChatThreadCardProps = {
  message: string;
  userName: string;
};

export type ChatBoxProps = {
  data: { chat: Chat; otherUser: OnlineUser; currentUser: User } | undefined;
};

export type SelectBlogOption = {
  id: number;
  title: string;
};

export type ListBoxProps = React.HTMLAttributes<HTMLUListElement>;

export type NullableHTMLUListElement = HTMLUListElement | null;

export type AutoCompleteContextType = {
  position: number;
  isLoading: boolean;
};

export type AutoCompleteOptions = SelectBlogOption[];

export type PrimaryAutoCompleteProps = {
  name: string;
  control: any;
  loading: boolean;
  options: AutoCompleteOptions;
  placeholder: string;
  totalOptions: number;
  fetchMoreData?: () => void;
};

export type DisplayBlogCommentsProps = {
  comments: string[];
};

export type SelectBlogProps = {
  setComments: React.Dispatch<React.SetStateAction<string[]>>;
};
