import { AppMenu } from 'containers';
import { AppBar, Container, Toolbar } from '@mui/material';
import { NextLink, publicRoute } from 'routes';

const Header = () => {
  return (
    <AppBar color='inherit' position='sticky' elevation={1}>
      <Toolbar component={Container} className='h-20'>
        <NextLink href={publicRoute.home.path}>
          <a className='flex items-center'>
            <img src='/assets/logos/logo_primary.svg' />
          </a>
        </NextLink>
        <div className='flex-1' />
        <AppMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
