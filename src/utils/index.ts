import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { OnlineUser, User } from 'types';
import axios, { AxiosResponse } from 'axios';
import { BLOGII_AUTH_TOKEN_KEY, CLOUDINARY_IMAGE_UPLOAD_URL } from '../constants';

dayjs.extend(relativeTime);

export function saveToken(token: string) {
  localStorage.setItem(BLOGII_AUTH_TOKEN_KEY, token);
  return true;
}

export function getToken() {
  const token = localStorage.getItem(BLOGII_AUTH_TOKEN_KEY);
  return token;
}

export function removeToken() {
  localStorage.removeItem(BLOGII_AUTH_TOKEN_KEY);
  return true;
}

export function isToken() {
  const token = localStorage.getItem(BLOGII_AUTH_TOKEN_KEY);
  return !!token;
}

export const uploadImage = async (image: File): Promise<AxiosResponse<any, any> | any> => {
  const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET_NAME || '');

  try {
    const response = await axios.post(CLOUDINARY_IMAGE_UPLOAD_URL, formData);
    return response;
  } catch (error: any) {
    return error;
  }
};

export const getTimeFromNow = (date: string): string => {
  return dayjs(new Date(date)).fromNow().toString();
};

export const getFormatDateInDDMMYYYY = (date: string): string => {
  return dayjs(new Date(parseInt(date)).toDateString())
    .format('DD MMMM YYYY')
    .toString();
};

const getAllOnlineUsersDataInFormatedWay = (onlineUsers: OnlineUser[]): OnlineUser[] => {
  const allOnlineUsers: OnlineUser[] = onlineUsers.map((user: any) => {
    return {
      name: user.data.name,
      userId: user.userId,
      socketId: user.data.socketId
    };
  });
  return allOnlineUsers;
};

export const updateOnlineUsers = (onlineUsers: OnlineUser[], mySocketId: string): OnlineUser[] => {
  const allOnlineUsers = getAllOnlineUsersDataInFormatedWay(onlineUsers);
  const onlineUsersExcludedCurrentUser = allOnlineUsers.filter(
    (data) => data.socketId !== mySocketId
  );
  return onlineUsersExcludedCurrentUser;
};

export const getCurrentUser = (onlineUsers: OnlineUser[], mySocketId: string): User | null => {
  const allOnlineUsers = getAllOnlineUsersDataInFormatedWay(onlineUsers);
  const currentUser = allOnlineUsers.find((data) => data.socketId === mySocketId);
  return currentUser ? currentUser : null;
};
