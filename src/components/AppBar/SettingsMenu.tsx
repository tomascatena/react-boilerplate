import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const settings = [
  { label: `Profile`, path: `/profile` },
  { label: `Account`, path: `/account` },
  { label: `Dashboard`, path: `/dashboard` },
  { label: `Logout`, path: `/logout` },
];

const SettingsMenu = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigateAndCloseMenu = (path: string) => {
    navigate(path);
    handleCloseUserMenu();
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{ p: 0 }}
        >
          <Avatar alt="Remy Sharp" />
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: `45px` }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: `top`,
          horizontal: `right`,
        }}
        keepMounted
        transformOrigin={{
          vertical: `top`,
          horizontal: `right`,
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map(({ label, path }) => (
          <MenuItem
            key={label}
            onClick={() => navigateAndCloseMenu(path)}
          >
            <Typography textAlign="center">{label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>);
};

export default SettingsMenu;
