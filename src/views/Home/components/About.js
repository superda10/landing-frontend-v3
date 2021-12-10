import { Remove } from '@mui/icons-material';
import { Button, Container, Link } from '@mui/material';
import { ColorButton } from 'components';

const About = () => {
  return (
    <div className='pb-20'>
      <Container>
        <div className='flex justify-end items-center font-medium text-gray-700 py-6'>
          <div className='text-gray-700'>
            <span>Get SPO</span>
            <Remove className='text-base mx-2' />
          </div>
          {[
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
          ].map((item, index) => (
            <Link key={index} href={item.url} className='text-gray-700 hover:text-primary-main mr-4'>
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
          >
            Stake & Earn
          </ColorButton>
        </div>

        <div className='flex items-start my-10'>
          <div className='mr-20'>
            <div className='font-medium text-2xl whitespace-pre-line text-justify'>
              {`Spores Network is an NFT Ecosystem that is powered through a curated marketplace - Art, Gaming, and Entertainment - that is combined with a GameFi launchpad and enhanced through a proprietary games publishing platform activating IDO, IGO, and INO opportunities.\n\nSpores enables artists, content creators, and brands to activate the Metaverse (Web3) by bridging digital and physical experiences.\n\nEverything we do is from the lens of being Asian influenced with Global Reach.`}
            </div>
            <div className='space-x-6 mt-8'>
              <ColorButton background='#232323'>Whitepaper</ColorButton>
              <ColorButton
                component={Link}
                href='https://etherscan.io/address/0xcbE771323587EA16dACB6016e269D7F08A7ACC4E'
              >
                SPO Contract Address
              </ColorButton>
            </div>
          </div>
          <img src={require('assets/images/about/about-us.png').default.src} />
        </div>

        <div className='flex flex-col items-center my-10'>
          <img src={require('assets/icons/icon-bumb.png').default.src} />
          <div className='flex justify-center space-x-6 my-8'>
            {[
              { name: 'Spores Marketplace', url: 'https://spores.app/explore' },
              { name: 'Spores Launchpad', url: 'https://launchpad.spores.app' },
              { name: 'VR Gallery – République' },
            ].map((item, index) => (
              <Link key={index} href={item.url}>
                <Button size='large' variant='outlined' className='text-black w-72 h-20 border-2 rounded-full'>
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
