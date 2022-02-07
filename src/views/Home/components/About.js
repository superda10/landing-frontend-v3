import React from 'react';
import { Remove } from '@mui/icons-material';
import { Button, Container, Dialog, Link } from '@mui/material';
import { ColorButton } from 'components';
import AboutWhitepaper from './AboutWhitepaper';
import Banners from './Banners';

export const exchangers = [
  {
    name: 'Uniswap',
    icon: require('assets/icons/logo-uniswap.png').default.src,
    url: 'https://app.uniswap.org/#/swap?outputCurrency=0xcbE771323587EA16dACB6016e269D7F08A7ACC4E',
  },
  {
    name: 'Gate.io',
    icon: require('assets/icons/logo-gateio.png').default.src,
    url: 'https://www.gate.io/trade/SPO_USDT',
  },
  {
    name: 'PancakeSwap',
    icon: require('assets/icons/logo-pancakeswap.png').default.src,
    url: 'https://pancakeswap.finance/swap?outputCurrency=0x8357c604c5533fa0053BeAaA1494Da552ceA38f7',
  },
];

const About = () => {
  const [isOpenWhitepaper, setIsOpenWhitepaper] = React.useState(false);

  return (
    <div id='about' className='pb-20'>
      <div className='flex items-center justify-between px-10'>
        <div className='flex items-center space-x-4'>
          <ColorButton background='#232323' onClick={() => setIsOpenWhitepaper(true)}>
            Whitepaper
          </ColorButton>
          <Dialog scroll='paper' maxWidth='lg' open={isOpenWhitepaper}>
            <AboutWhitepaper onClose={() => setIsOpenWhitepaper(false)} />
          </Dialog>

          <ColorButton
            component={Link}
            href='https://etherscan.io/address/0xcbE771323587EA16dACB6016e269D7F08A7ACC4E'
            target='_blank'
          >
            SPO Contract Address
          </ColorButton>
        </div>
        <div className='hidden md:flex justify-end items-center font-medium text-gray-700 py-5'>
            <div className='text-gray-700'>
              <span>Get SPO</span>
              <Remove className='text-base mx-2' />
            </div>
            {exchangers.map((item, index) => (
              <Link key={index} href={item.url} className='text-gray-700 hover:text-primary-main mr-6'>
                <div className='flex items-center'>
                  <img src={item.icon} className='mr-1.5' />
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
            <ColorButton
              component={Link}
              background='#EBECF0'
              className='text-gray-700'
              href='https://staking.spores.app'
              target='_blank'
            >
              Stake & Earn
            </ColorButton>
          </div>
      </div>
            <Banners />
        {/* <img src={'/assets/images/banner.png'} className={'w-full'} /> */}
        {/* <div className='flex flex-col-reverse lg:flex-row items-start my-10'>
          <div className='flex-1 lg:mr-20'>
            <div className='font-medium lg:font-bold text-sm md:text-xl lg:text-2xl whitespace-pre-line text-center md:text-justify'>
              {`Spores Network is an NFT Ecosystem that is powered through a curated marketplace - Art, Gaming, and Entertainment - that is combined with a GameFi launchpad and enhanced through a proprietary games publishing platform activating IDO, IGO, and INO opportunities.\n\nSpores enables artists, content creators, and brands to activate the Metaverse (Web3) by bridging digital and physical experiences.\n\nEverything we do is from the lens of being Asian influenced with Global Reach.`}
            </div>
            <div className='flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6 mt-8'>
              <ColorButton size='large' background='#232323' onClick={() => setIsOpenWhitepaper(true)}>
                Whitepaper
              </ColorButton>
              <Dialog scroll='paper' maxWidth='lg' open={isOpenWhitepaper}>
                <AboutWhitepaper onClose={() => setIsOpenWhitepaper(false)} />
              </Dialog>

              <ColorButton
                size='large'
                component={Link}
                href='https://etherscan.io/address/0xcbE771323587EA16dACB6016e269D7F08A7ACC4E'
                target='_blank'
              >
                SPO Contract Address
              </ColorButton>
            </div>
          </div>
          <div className='lg:max-w-md xl:max-w-xl mx-auto mb-6'>
            <img src={require('assets/images/about/about-us.png').default.src} />
          </div>
        </div> */}

        <div className='flex flex-col items-center my-10'>
          <img src={require('assets/icons/icon-bumb.png').default.src} />
          <div className='flex flex-wrap justify-center my-8'>
            {[
              { name: 'Spores Marketplace', url: 'https://marketplace.spores.app' },
              { name: 'Spores Launchpad', url: 'https://launchpad.spores.app' },
              { name: 'République', url: 'https://republique.spores.app/' },
              { name: 'Game Store', url: 'https://games.spores.app/' },
            ].map((item, index) => (
              <Link key={index} href={item.url}>
                <Button
                  size='large'
                  variant='outlined'
                  className='text-black border-2 rounded-full w-72 h-20 mx-4 my-2'
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      
    </div>
  );
};

export default About;
