import { useAuth } from 'customHooks';
import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';
import { HeaderWrapper } from 'styles';
import { useAppContext } from 'contexts';
import { HEADER_SCROLL_BEHAVIOUR } from 'styles/constants';
import { useMediaQuery, useTheme } from '@mui/material';
import { useCallback, useEffect, useRef } from 'react';

export const Header = () => {
  const theme = useTheme();
  const headerRef = useRef<HTMLDivElement>();
  const { logout } = useAuth();
  const { isLoggedIn } = useAppContext();
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

  const onScrollHeaderBehaviour = useCallback(() => {
    if (headerRef.current) {
      if (window.scrollY > headerRef.current?.offsetHeight)
        headerRef.current.style.cssText += HEADER_SCROLL_BEHAVIOUR.sticky;
      else if (window.scrollY === 0) {
        headerRef.current.style.cssText += HEADER_SCROLL_BEHAVIOUR.nonSticky;
        headerRef.current.style.top = `-${headerRef.current?.offsetHeight - 10}px`;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScrollHeaderBehaviour);
    return () => {
      window.removeEventListener('scroll', onScrollHeaderBehaviour);
    };
  }, []);

  return (
    <HeaderWrapper ref={headerRef}>
      {isMobileView ? (
        <MobileHeader isLoggedIn={isLoggedIn} logout={logout} />
      ) : (
        <DesktopHeader isLoggedIn={isLoggedIn} logout={logout} />
      )}
    </HeaderWrapper>
  );
};
