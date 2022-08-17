import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';
import React from 'react';

const AppLogoMobile = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

      <Typography
        variant="h5"
        noWrap
        component="a"
        onClick={() => navigate('/')}
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        LOGO
      </Typography></>
  );
};

export default AppLogoMobile;
