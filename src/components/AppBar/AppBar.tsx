import { AppBar, Container, Toolbar } from '@mui/material';
import AppLogoDesktop from './AppLogoDesktop';
import AppLogoMobile from './AppLogoMobile';
import CustomThemeSwitch from '../common-components/CustomThemeSwitch/CustomThemeSwitch';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import React from 'react';
import SettingsMenu from './SettingsMenu';

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
