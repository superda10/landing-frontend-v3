import { Button, Container, Link } from '@mui/material';

const About = () => {
  return (
    <div className='pt-20 pb-32' style={{ backgroundColor: '#232323', borderRadius: '120px 120px 0 0' }}>
      <Container>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-6xl text-white py-8'>CONTACT US</h1>
          <img src={require('assets/icons/icon-bumb.png').default.src} />
        </div>
        <div className='font-bold text-3xl text-center text-white py-10'>
          Artists, creators, retailers, brands wanted!
        </div>
        <Container maxWidth='md' className='flex justify-around'>
          {[
            { name: 'Apply to be a Creator', url: 'https://spores.app/explore' },
            { name: 'Partnership Proposal', url: 'https://spores.app/explore' },
            { name: 'Customer Support', url: 'https://spores.app/explore' },
          ].map((item, index) => (
            <Button
              key={index}
              component={Link}
              href={item.url}
              className='text-xl text-center text-white rounded-full w-60 h-20'
            >
              {item.name}
            </Button>
          ))}
        </Container>
      </Container>
    </div>
  );
};

export default About;
