import { io } from 'socket.io-client';

export const createSocketConnection = (token: string) => {
  console.log('establishing socket connection: ');
  return io(process.env.REACT_APP_SOCKET_URL || '', {
    extraHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
};
