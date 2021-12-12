import { Container } from '@mui/material';

const Tokenomics = () => {
  return (
    <Container className='bg-white py-20 px-6 md:px-20 rounded-60px'>
      <div className='flex flex-col items-center mb-16'>
        <h1 className='font-black text-center text-4xl md:text-6xl py-4 md:py-8'>TOKENOMICS</h1>
        <img src={require('assets/icons/icon-bumb.png').default.src} />
      </div>
      <div className='flex flex-col lg:flex-row items-center my-10'>
        <div className='lg:max-w-md xl:max-w-xl mx-auto mb-6 lg:mr-20'>
          <img src={require('assets/images/tokens/tokenomics.svg').default.src} />
        </div>
        <div className='flex-1'>
          <div className='font-bold text-2xl mb-2'>SPO Token</div>
          <div className='font-medium text-gray-500 mb-2'>
            The native token of Spores Platform is designed for community governance and DeFi utilization with
            NFT-creator-centricity and DeFi-community-driven purpose.
          </div>
          <div className='font-medium'>
            SPO is used to incentivize NFT creators, buyers, agents, and liquidity providers across the ecosystem.
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center mt-20 md:mt-32 mb-16'>
        <h1 className='font-black text-center text-4xl md:text-6xl py-4 md:py-8'>SPO TOKEN METRICS</h1>
        <img src={require('assets/icons/icon-bumb.png').default.src} />
      </div>
      <div className='flex justify-center mb-8 md:mb-16'>
        <img src={require('assets/images/tokens/token-metrics-1.svg').default.src} />
      </div>
      <div className='flex justify-center mb-8 md:mb-16'>
        <img src={require('assets/images/tokens/token-metrics-2.svg').default.src} />
      </div>
      <div className='flex justify-center'>
        <img src={require('assets/images/tokens/token-metrics-3.svg').default.src} />
      </div>
    </Container>
  );
};

export default Tokenomics;
