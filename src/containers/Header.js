import { AppMenu } from 'containers';
import { AppBar, Toolbar } from '@mui/material';
import { NextLink, publicRoute } from 'routes';

const Header = () => {
  return (
    <AppBar color='inherit' position='sticky' elevation={1}>
      <Toolbar className='md:h-20 px-10'>
        <NextLink href={publicRoute.home.path}>
          <a className='flex items-center'>
            <img src='/assets/logos/logo_primary.svg' className='h-10 md:h-auto' />
          </a>
        </NextLink>
        <div className='flex-1' />
        <AppMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
