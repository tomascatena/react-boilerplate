import AppBar from '@mui/material/AppBar';
import AppLogoDesktop from './AppLogoDesktop';
import AppLogoMobile from './AppLogoMobile';
import Container from '@mui/material/Container';
import CustomThemeSwitch from '../custom-components/CustomThemeSwitch/CustomThemeSwitch';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import React from 'react';
import SettingsMenu from './SettingsMenu';
import Toolbar from '@mui/material/Toolbar';

const pages = [
  {
    label: 'Login',
    path: '/login',
  },
  {
    label: 'Register',
    path: '/register',
  }
];

interface Props {
  darkMode: boolean;
  toggleDarkMode: (checked: boolean) => void;
}

const ResponsiveAppBar = ({ darkMode, toggleDarkMode }: Props) => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AppLogoDesktop />

          <MenuMobile pages={pages} />

          <AppLogoMobile />

          <MenuDesktop pages={pages} />

          <CustomThemeSwitch
            value={darkMode}
            onChange={(e) => toggleDarkMode(e.target.checked)}
            defaultChecked
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 2,
            }}
          />

          <SettingsMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
