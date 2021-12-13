import { Avatar, Button, Container, Link } from '@mui/material';

const About = () => {
  return (
    <div id='contact' className='py-20 rounded-t-60px md:rounded-t-120px' style={{ backgroundColor: '#232323' }}>
      <Container>
        <div className='flex flex-col items-center'>
          <h1 className='font-black text-center text-white text-4xl md:text-6xl py-4 md:py-8'>CONTACT US</h1>
          <img src={require('assets/icons/icon-bumb.png').default.src} />
        </div>
        <div className='font-bold text-xl md:text-3xl text-center text-white py-10'>
          Artists, creators, retailers, brands wanted!
        </div>
        <Container maxWidth='md' className='flex flex-col md:flex-row items-center justify-center'>
          {[
            { name: 'Apply to be a Creator', url: 'https://spores.xperx.ai/artist-apply' },
            { name: 'Partnership Proposal', url: 'mailto:marketing@spores.app' },
            { name: 'Customer Support', url: 'mailto:customersupport@spores.app' },
          ].map((item, index) => (
            <Button
              key={index}
              component={Link}
              href={item.url}
              className='text-xl text-center text-white rounded-full w-60 h-20 mx-4 my-2'
            >
              {item.name}
            </Button>
          ))}
        </Container>
        <div className='flex justify-center my-10'>
          <Button variant='outlined' className='font-bold text-2xl border-2 rounded-full h-20'>
            JOIN OUR MAILING LIST
          </Button>
        </div>
        <div className='flex flex-wrap justify-center'>
          {[
            {
              icon: require('assets/socials/primary_facebook.png').default.src,
              name: 'Facebook',
              url: 'https://facebook.com/SporesNetwork',
            },
            {
              icon: require('assets/socials/primary_twitter.png').default.src,
              name: 'Twitter',
              url: 'https://twitter.com/Spores_Network',
            },
            {
              icon: require('assets/socials/primary_instagram.png').default.src,
              name: 'Instagram',
              url: 'https://instagram.com/SporesNetwork',
            },
            {
              icon: require('assets/socials/primary_discord.png').default.src,
              name: 'Discord',
              url: 'https://discord.gg/FYcdCycv',
            },
            {
              icon: require('assets/socials/primary_telegram.png').default.src,
              name: 'Telegram',
              url: 'https://t.me/SporesOfficial',
            },
            {
              icon: require('assets/socials/primary_linkedin.png').default.src,
              name: 'LinkedIn',
              url: 'https://linkedin.com/company/SporesNetwork',
            },
          ].map((item, index) => (
            <Avatar
              key={index}
              component={Link}
              src={item.icon}
              href={item.url}
              title={item.name}
              className='w-12 h-12 md:w-16 md:h-16 m-1 md:m-2'
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default About;
