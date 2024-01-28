import { AppContextType } from 'types';
import { createContext, useContext } from 'react';

export const AppContext = createContext<AppContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  socketConnection: undefined,
  setSocketConnection: () => {}
});

export const useAppContext = () => useContext(AppContext);
