import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';

type Props = {
  pages: { label: string; path: string; }[];
};

const MenuDesktop = ({
  pages
}: Props) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button
          key={page.path}
          onClick={() => navigate(page.path)}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page.label}
        </Button>
      ))}
    </Box>);
};

export default MenuDesktop;
