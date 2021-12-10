import { Container } from '@mui/material';

const Tokenomics = () => {
  return (
    <Container className='bg-white p-20' style={{ borderRadius: 60 }}>
      <div className='flex flex-col items-center mb-16'>
        <h1 className='font-bold text-6xl py-8'>TOKENOMICS</h1>
        <img src={require('assets/icons/icon-bumb.png').default.src} />
      </div>
      <div className='text-center text-2xl'>PENDING</div>

      <div className='flex flex-col items-center mt-32 mb-16'>
        <h1 className='font-bold text-6xl py-8'>SPO TOKEN METRICS</h1>
        <img src={require('assets/icons/icon-bumb.png').default.src} />
      </div>
      <div className='text-center text-2xl'>PENDING</div>
    </Container>
  );
};

export default Tokenomics;
