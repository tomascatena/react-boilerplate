import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

type Props = {
  pages: { label: string; path: string; }[];
};

const MenuMobile = ({ pages }: Props) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: `flex`, md: `none` } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: `bottom`,
          horizontal: `left`,
        }}
        keepMounted
        transformOrigin={{
          vertical: `top`,
          horizontal: `left`,
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: `block`, md: `none` },
        }}
      >
        {pages.map((page) => (
          <MenuItem
            key={page.path}
            onClick={() => navigate(page.path)}
          >
            <Typography textAlign="center">{page.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>);
};

export default MenuMobile;
