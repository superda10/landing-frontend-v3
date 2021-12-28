import React from 'react';
import { Close, Menu as MenuIcon } from '@mui/icons-material';
import { Drawer, IconButton, Link, List, ListItemButton } from '@mui/material';
import { ColorButton } from 'components';
import { exchangers } from 'views/Home/components/About';

const AppMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  const scrollTo = (target, behavior = 'smooth') => {
    history.replaceState(null, null, '#' + target);
    document.getElementById(target)?.scrollIntoView({ behavior, block: 'start' });
  };

  const items = [
    { name: 'About', target: 'about' },
    { name: 'Our Projects', target: 'projects' },
    { name: 'Spores News', target: 'news' },
    { name: 'What Spores Does', target: 'works' },
    { name: 'Tokenomics', target: 'tokenomics' },
    { name: 'The Team', target: 'team' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <div>
      <div className='hidden md:flex items-center ml-10'>
        {items.map((item, index) => (
          <a
            key={index}
            onClick={() => scrollTo(item.target)}
            className='font-semibold text-sm text-center cursor-pointer text-black hover:text-black mx-4'
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className='block md:hidden'>
        <IconButton onClick={() => setIsOpenMenu(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          PaperProps={{ className: 'text-white', style: { backgroundColor: '#232323' } }}
          anchor='top'
          open={isOpenMenu}
          onClose={() => setIsOpenMenu(false)}
        >
          <List>
            {items.map((item, index) => (
              <ListItemButton
                key={index}
                className='font-bold hover:bg-gray-500'
                onClick={() => {
                  scrollTo(item.target, 'auto');
                  setIsOpenMenu(false);
                }}
              >
                {item.name}
              </ListItemButton>
            ))}
          </List>
          <div className='px-4 pb-4'>
            <div className='mb-3 bg-primary-main' style={{ height: 1 }} />
            <div className='font-bold mb-2'>Get SPO</div>
            <div className='flex flex-wrap'>
              {exchangers.map((item, index) => (
                <Link key={index} href={item.url} className='text-white hover:text-primary-main mr-6'>
                  <div className='flex items-center h-10'>
                    <img src={item.icon} className='mr-1.5' />
                    <span className='font-medium'>{item.name}</span>
                  </div>
                </Link>
              ))}
              <ColorButton component={Link} href='https://staking.spores.app' target='_blank'>
                Stake & Earn
              </ColorButton>
            </div>
          </div>
          <IconButton
            className='absolute top-2 right-4 z-10 text-white hover:bg-gray-500'
            onClick={() => setIsOpenMenu(false)}
          >
            <Close />
          </IconButton>
        </Drawer>
      </div>
    </div>
  );
};

export default AppMenu;
