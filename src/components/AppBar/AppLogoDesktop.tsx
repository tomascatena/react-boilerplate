import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';
import React from 'react';

const AppLogo = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdbIcon sx={{ display: { xs: `none`, md: `flex` }, mr: 1 }} />

      <Typography
        variant="h6"
        noWrap
        component="a"
        onClick={() => navigate(`/`)}
        sx={{
          mr: 2,
          display: { xs: `none`, md: `flex` },
          fontFamily: `monospace`,
          fontWeight: 700,
          letterSpacing: `.3rem`,
          color: `inherit`,
          textDecoration: `none`,
        }}
      >
        APP LOGO
      </Typography>
    </>
  );
};

export default AppLogo;
