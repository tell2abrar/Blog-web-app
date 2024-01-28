import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLinksList } from './NavLinksList';
import { paperPropsSx } from 'styles/constants';
import { HeaderSearchBar } from 'components';
import { Logout, Settings } from '@mui/icons-material';
import { DesktopHeaderProps } from 'types';
import { HEADER_NAV_LINKS, ROUTES_PATH } from '../../../../constants';
import { CustomAvatar, GreyBox, HeaderButton } from 'styles';
import { Box, ListItemIcon, Menu, MenuItem, Stack } from '@mui/material';

export const DesktopHeader = ({ isLoggedIn, logout }: DesktopHeaderProps) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Stack direction="row">
        <Stack direction="row" alignItems="center">
          <GreyBox />
          <NavLinksList isLoggedIn={isLoggedIn} data={HEADER_NAV_LINKS} />
        </Stack>

        <Stack sx={{ marginLeft: 'auto', alignItems: 'center' }} direction="row">
          <Box sx={{ width: '300px' }}>
            <HeaderSearchBar />
          </Box>

          {isLoggedIn ? (
            <>
              <Box sx={{ marginLeft: '20px' }}>
                <HeaderButton variant="contained" onClick={() => navigate(ROUTES_PATH.createPost)}>
                  Create Article
                </HeaderButton>
              </Box>

              <Box>
                <CustomAvatar onClick={(e) => handleClick(e)} />
                <Menu
                  id="account-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button'
                  }}
                  PaperProps={{
                    elevation: 0,
                    sx: paperPropsSx
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem
                    onClick={() => {
                      navigate(ROUTES_PATH.settings);
                      handleClose();
                    }}
                  >
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      logout();
                    }}
                  >
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ marginLeft: '20px' }}>
                <HeaderButton variant="outlined" onClick={() => navigate(ROUTES_PATH.signin)}>
                  Log in
                </HeaderButton>
              </Box>

              <Box sx={{ marginLeft: '20px' }}>
                <HeaderButton variant="contained" onClick={() => navigate(ROUTES_PATH.signup)}>
                  Sign up
                </HeaderButton>
              </Box>
            </>
          )}
        </Stack>
      </Stack>
    </>
  );
};
