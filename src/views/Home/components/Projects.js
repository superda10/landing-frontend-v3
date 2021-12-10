import { Container, Grid, Link } from '@mui/material';
import { ColorButton } from 'components';
import { News } from 'views/Home/components';

const Projects = () => {
  return (
    <div className='relative pt-32' style={{ backgroundColor: '#232323', borderRadius: '120px 120px 0 0' }}>
      <div className='absolute left-0 right-0 -top-16 flex justify-center'>
        <img src={require('assets/icons/logo-primary-circle.png').default.src} />
      </div>
      <Container>
        <div className='max-w-4xl text-center mx-auto p-16' style={{ backgroundColor: '#2B2B2B', borderRadius: 60 }}>
          <div className='font-bold text-6xl text-primary-main'>Bringing WEB2 creators into the Metaverse</div>
        </div>

        <div className='flex flex-col items-center mt-32 mb-16'>
          <h1 className='font-bold text-6xl text-white py-8'>OUR PROJECTS</h1>
          <img src={require('assets/icons/icon-bumb.png').default.src} />
        </div>

        <Grid container spacing={6} className='mb-32'>
          {[
            {
              name: 'Super BOOMi',
              description: `Super BOOMi is an award-winning animated show that has been gaining both Asia and worldwide success for its wondrous virtual reality game universe with coding, technology and friendship as its core themes.`,
              url: 'https://superboomi.spores.app',
              image: require('assets/images/projects/Super_BOOMi.png').default.src,
            },
            {
              name: 'American McGee',
              description: `American McGee is an influential figure best known as the designer of his signature game American McGee’s Alice and its sequence Alice: Madness Returns.\n\nPlushie Dreadfuls is a line of broken, stitched, weird, and scary plush toys from the mind of American McGee.`,
              url: 'https://american.spores.app',
              image: require('assets/images/projects/American_McGee.png').default.src,
            },
            {
              name: 'PolkaFantasy',
              description: `PolkaFantasy is the BEST Japanese NFT cross-chain marketplace & multiverse game, built for NFT lovers by NFT enthusiasts. Inspired by Japanese Animation, Comics, and Games (ACG) culture, PolkaFantasy is an immersive platform to discover, create, trade, and interact with any digital collectibles.`,
              url: 'https://polkafantasy.spores.app',
              image: require('assets/images/projects/PolkaFantasy.png').default.src,
            },
            {
              name: 'Netvrk',
              description: `Netvrk is a Metaverse and platform, with powerful creation tools and infrastructure to easily create, share, experience, and monetize creations. With a focus on gaming, education, and virtual workplaces, built around ownership of virtual land and assets.`,
              image: require('assets/images/projects/Netvrk.png').default.src,
            },
          ].map((item, index) => (
            <Grid item key={index} xl={3}>
              <div
                className='flex flex-col items-center justify-between border-2 border-primary-main px-6 py-12'
                style={{
                  background: `url(${item.image}) no-repeat center center / cover`,
                  height: 480,
                  borderRadius: 60,
                }}
              >
                <div className='text-white text-center'>
                  <div className='font-bold text-3xl mb-8'>{item.name}</div>
                  <div className='text-sm whitespace-pre-line'>{item.description}</div>
                </div>
                <ColorButton component={Link} background='#FFF' href={item.url}>
                  Learn more
                </ColorButton>
              </div>
            </Grid>
          ))}
        </Grid>

        <div className='flex flex-col items-center mt-32 mb-8'>
          <div className='font-bold text-6xl text-white py-8'>COMING SOON</div>
        </div>
        <Grid container rowSpacing={6} columnSpacing={3} className='mb-40'>
          {[
            { name: 'Chain Guardians', image: require('assets/images/projects/Chain_Guardians.png').default.src },
            { name: 'Himo World', image: require('assets/images/projects/Himo_World.png').default.src },
            { name: 'Mystery Brothers', image: require('assets/images/projects/Mystery_Brothers.png').default.src },
            { name: 'Todd Gray', image: require('assets/images/projects/Todd_Gray.png').default.src },
            { name: 'Carlos Luna James', image: require('assets/images/projects/Carlos_Luna_James.png').default.src },
            { name: 'Immortal Studios', image: require('assets/images/projects/Immortal_Studios.png').default.src },
            { name: 'Ookeenga', image: require('assets/images/projects/Ookeenga.png').default.src },
            { name: 'Vampire Hunter D', image: require('assets/images/projects/Vampire_Hunter_D.png').default.src },
            { name: 'Drakons', image: require('assets/images/projects/Drakons.png').default.src },
            { name: 'Jasper Wong', image: require('assets/images/projects/Jasper_Wong.png').default.src },
            { name: 'Oort Digital', image: require('assets/images/projects/Oort_Digital.png').default.src },
            { name: 'Kuruma', image: require('assets/images/projects/Kuruma.png').default.src },
            { name: 'Kow Yokoyama', image: require('assets/images/projects/Kow_Yokoyama.png').default.src },
            { name: 'Tillavision', image: require('assets/images/projects/Tillavision.png').default.src },
          ].map((item, index) => (
            <Grid item key={index} xl={3}>
              <div
                className='flex flex-col items-center justify-center rounded-full'
                style={{
                  background: `url(${item.image}) no-repeat center center / cover`,
                  height: 92,
                }}
              >
                <div className='font-bold text-xl text-white'>{item.name}</div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <News />
    </div>
  );
};

export default Projects;
