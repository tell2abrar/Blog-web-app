import { Navigate } from 'react-router-dom';
import { useAppContext } from 'contexts';
import { ProtectedProps } from 'types';

export const Protected = ({ children }: ProtectedProps) => {
  const { isLoggedIn } = useAppContext();
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
