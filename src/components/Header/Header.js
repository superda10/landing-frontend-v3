import React, { useMemo } from 'react';
import Link from 'next/link';
import { Button, Menu, MenuItem, styled } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useAnchor } from 'hooks';
import { DarkButton } from 'components/Common';

const CustomMenuItem = styled(MenuItem)`
  font-weight: 500;
  font-size: 16px;
  color: #475467;
`;
//TODO:add url
const productList = [
  { title: 'Launchpad', url: '' },
  { title: 'Marketplace', url: '' },
];

const aboutList = [
  { title: 'About us', url: '' },
  { title: 'Docs', url: '' },
];

const ourServiceList = [
  {
    name: 'Marketing',
    list: [
      {
        title: 'CMO services',
        content:
          'Take care of your whole marketing strategy with a dedicated and experienced team in the cryptocurrency business.',
        url: '',
        icon: 'icon-book',
      },
      {
        title: 'Community',
        content:
          'Entirely build and manage your social community in order to cultivate long-term relationships with your target audiences.',
        url: '',
        icon: 'icon-zap',
      },
      {
        title: 'KOL Booking',
        content: 'Create buzz around your project with high engagement KOLs',
        url: '',
        icon: 'icon-play-circle',
      },
      {
        title: 'Shilling',
        content:
          'Post organic impressions and engagement on your social media with well-trained shillers that use customized scripts and strategies',
        url: '',
        icon: 'icon-file',
      },
    ],
  },
  {
    name: 'Development',
    list: [
      {
        title: 'Blockchain Development',
        content:
          'Public & Private Blockchain: We offer all kinds of full-stack blockchain development, including tailoring public or private platform chain with protocols that fit your needs.',
        url: '',
        icon: 'icon-flag',
      },
      {
        title: 'Gamefi Development',
        content:
          'Effortlessly launch your blockchain game with our ready-made, efficient and seamless game transition solution',
        url: '',
        icon: 'icon-message-circle',
      },
      {
        title: 'Whitelabel Launchpad & NFT Marketplace',
        content: 'NFT marketplace and Launchpad platforms with full features',
        url: '',
        icon: 'icon-users',
      },
      {
        title: 'Senior IT Personnel',
        content: 'We provide dedicated & experience resources that work directly under your instructions.',
        url: '',
        icon: 'icon-folder',
      },
    ],
  },
];

const dropDownSetting = {
  sx: {
    overflow: 'visible',
    backgroundColor: '#FAFAFA',
    border: '',
    marginTop: 0,
    boxShadow: '0px 10px 15px -3px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)',
    borderRadius: '8px',
    '&:before': {
      display: 'none',
    },
  },
};

const Header = () => {
  const [anchorElProduct, openProduct, onOpenProduct, onCloseProduct] = useAnchor();
  const [anchorElAbout, openAbout, onOpenAbout, onCloseAbout] = useAnchor();
  const [anchorElOurServices, openOurServices, onOpenOurServices, onCloseOurServices] = useAnchor();

  const menuList = useMemo(
    () => [
      { title: 'PRODUCT', url: null, handleClick: onOpenProduct },
      { title: 'NEWS', url: 'a', handleClick: null },
      { title: 'STAKING', url: 'a', handleClick: null },
      { title: 'OUR SERVICES', url: null, handleClick: onOpenOurServices },
      { title: 'ABOUT', url: null, handleClick: onOpenAbout },
    ],
    [onOpenAbout, onOpenOurServices, onOpenProduct],
  );

  return (
    <div
      className='flex justify-center fixed top-0 left-0 right-0 bg-[#F2F2FB] py-3'
      style={{ borderBottom: '1px solid #E6E6EC', zIndex: 100 }}
    >
      <div className='flex justify-between max-w-[1320px] w-full'>
        <Link href='/'>
          <a>
            <img src='/assets/logos/logo_primary.svg' className='h-10' alt='logo' />
          </a>
        </Link>
        <div className='flex gap-2'>
          {menuList.map((menu, index) => (
            <Button
              key={index}
              variant='text'
              className='text-base text-[#667085] hover:text-[#D9AC63] font-semibold'
              endIcon={!menu.url && <ExpandMore />}
              onClick={menu.handleClick}
            >
              {menu.title}
            </Button>
          ))}
          <DarkButton>Contact Us</DarkButton>
        </div>
        <Menu
          anchorEl={anchorElProduct}
          disableScrollLock
          PaperProps={dropDownSetting}
          transformOrigin={{ horizontal: 'left', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          open={openProduct}
          onClose={onCloseProduct}
          onClick={onCloseProduct}
        >
          {productList.map((info, index) => (
            <CustomMenuItem
              key={index}
              onClick={() => {
                window.open(info.url, '_blank');
              }}
            >
              {info.title}
            </CustomMenuItem>
          ))}
        </Menu>
        <Menu
          anchorEl={anchorElAbout}
          disableScrollLock
          PaperProps={dropDownSetting}
          transformOrigin={{ horizontal: 'left', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          open={openAbout}
          onClose={onCloseAbout}
          onClick={onCloseAbout}
        >
          {aboutList.map((info, index) => (
            <CustomMenuItem
              key={index}
              onClick={() => {
                window.open(info.url, '_blank');
              }}
            >
              {info.title}
            </CustomMenuItem>
          ))}
        </Menu>
        <Menu
          anchorEl={anchorElOurServices}
          disableScrollLock
          PaperProps={dropDownSetting}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          open={openOurServices}
          onClose={onCloseOurServices}
          onClick={onCloseOurServices}
        >
          <div className='grid grid-cols-2 gap-9 max-w-[1320px] py-6 px-12'>
            {ourServiceList.map((item, index) => (
              <div key={index}>
                <div className='text-sm text-[#AA834C] font-semibold mb-4'>{item.name}</div>
                <div className='flex flex-col gap-2'>
                  {item.list.map((info, index) => (
                    <MenuItem
                      key={index}
                      className='rounded-md'
                      onClick={() => {
                        window.open(info.url, '_blank');
                      }}
                    >
                      <div className='flex gap-4'>
                        <img src={`/assets/images/icons/${info.icon}.png`} className='h-6 w-6' />
                        <div>
                          <div className='text-[#101828] font-semibold mb-1'>{info.title}</div>
                          <div className='whitespace-normal text-[#667085] text-sm'>{info.content}</div>
                        </div>
                      </div>
                    </MenuItem>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
