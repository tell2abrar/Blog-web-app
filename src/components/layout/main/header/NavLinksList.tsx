import React from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderNavLink } from 'styles';
import { NavLinksListProps } from 'types';

export const NavLinksList = ({ data, isLoggedIn }: NavLinksListProps) => {
  const location = useLocation();
  return (
    <>
      {data.map((link) => (
        <React.Fragment key={link.id}>
          {link.isProtected ? (
            isLoggedIn && (
              <HeaderNavLink
                to={link.to}
                sx={{
                  color: location.pathname === link.to ? '#111111' : 'rgba(102, 102, 102, 0.8)'
                }}
              >
                {link.text}
              </HeaderNavLink>
            )
          ) : (
            <HeaderNavLink
              to={link.to}
              sx={{
                color: location.pathname === link.to ? '#111111' : 'rgba(102, 102, 102, 0.8)'
              }}
            >
              {link.text}
            </HeaderNavLink>
          )}
        </React.Fragment>
      ))}
    </>
  );
};
