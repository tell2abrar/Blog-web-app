import { useAppContext } from 'contexts';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthLayoutWrapper } from 'styles';

export const AuthLayout = () => {
  const { isLoggedIn } = useAppContext();
  if (isLoggedIn) {
    return <Navigate to="" replace />;
  }

  return (
    <AuthLayoutWrapper>
      <Outlet />
    </AuthLayoutWrapper>
  );
};
