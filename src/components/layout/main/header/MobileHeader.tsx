import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { NavLinksList } from 'components';
import { HeaderSearchBar } from './HeaderSearchBar';
import { MobileHeaderProps } from 'types';
import { GreyBox, HeaderNavLink } from 'styles';
import { MOBILE_HEADER_NAV_LINKS } from '../../../../constants';
import { Box, Drawer, IconButton, Stack } from '@mui/material';

export const MobileHeader = ({ isLoggedIn, logout }: MobileHeaderProps) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <GreyBox />

        <Box sx={{ flexGrow: 1, marginLeft: '15px' }}>
          <HeaderSearchBar />
        </Box>

        <IconButton sx={{ marginLeft: '5px' }} onClick={() => setOpenDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </Stack>

      <Drawer
        variant="temporary"
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(!openDrawer)}
      >
        <Stack
          sx={{ width: 200, alignItems: 'center', padding: '150px 0px' }}
          role="presentation"
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <NavLinksList isLoggedIn={isLoggedIn} data={MOBILE_HEADER_NAV_LINKS} />

          {isLoggedIn ? (
            <HeaderNavLink
              to=""
              onClick={() => {
                logout();
              }}
            >
              Logout
            </HeaderNavLink>
          ) : (
            <>
              <HeaderNavLink to="/signin">Sign in</HeaderNavLink>
              <HeaderNavLink to="/signup">Sign up</HeaderNavLink>
            </>
          )}
        </Stack>
      </Drawer>
    </>
  );
};
