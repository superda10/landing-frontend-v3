import { Button, Container, Grid } from '@mui/material';
import { Tokenomics } from 'views/Home/components';

const Games = () => {
  return (
    <div className='pb-32' style={{ backgroundColor: '#232323' }}>
      <Works />
      <Container>
        {[
          {
            title: 'SPORES GAME PUBLISHING',
            games: [
              {
                phase: 'Launchpad',
                image: require('assets/images/works/game_launchpad.png').default.src,
                name: 'GameFi Launchpad',
                content: `launches high quality P2E games through INOs of their in-game assets including land transport, weapons, skills, avatar, and more.`,
              },
              {
                phase: 'Incubator',
                image: require('assets/images/works/game_incubator.png').default.src,
                name: 'GameFi Incubator',
                content: `invests in GameFi IDOs and operates blockchain game studios with support across funding, marketing, operations, and tech advisory functional expertise.`,
              },
            ],
          },
          {
            title: 'METAVERSE',
            games: [
              {
                phase: 'Phase 1',
                image: require('assets/images/works/game_phase1.png').default.src,
                name: 'République',
                content: `- Museum, Retail Space, Sculpture Parque - A Meta Experience.\nArtists, Collectors, Retailers Wanted!\n\n- Opening in Dec 2021`,
              },
              {
                phase: 'Incubator',
                image: require('assets/images/works/game_phase2.png').default.src,
                name: 'Spores Metaverse',
                content: `- An immersive digital 3D playground and gamiﬁed open world ecosystem where all IP and brand partners can interact with people choosing to enrich and connect between their digital and physical lives.\n\n- Coming Soon`,
              },
            ],
          },
        ].map((item, index) => (
          <div key={index}>
            <div className='flex flex-col items-center mt-20 mb-8 md:mt-32 md:mb-16'>
              <h1 className='font-black text-center text-4xl md:text-6xl text-white py-4 md:py-8'>{item.title}</h1>
              <img src={require('assets/icons/icon-bumb.png').default.src} />
            </div>
            <div className='max-w-7xl flex flex-col md:flex-row justify-between mx-auto mb-32'>
              {item.games.map((game, index) => (
                <div key={index} className='flex-1 mx-4'>
                  <div
                    style={{ background: `url(${game.image}) no-repeat center center`, maxWidth: 600, height: 360 }}
                    className='m-auto md:bg-contain'
                  />
                  <div className='px-10 py-6'>
                    <div className='flex items-start mb-1'>
                      <img src={require('assets/icons/logo-primary-star.png').default.src} className='w-10 mr-2' />
                      <div className='font-bold text-2xl text-primary-main py-1'>{game.phase}</div>
                    </div>
                    <div className='text-white whitespace-pre-line'>
                      <span className='font-bold mr-1.5'>{game.name}</span>
                      <span>{game.content}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Container>
      <Tokenomics />
    </div>
  );
};

const Works = () => {
  return (
    <div id='works' className='bg-white py-20 md:py-32 rounded-b-60px md:rounded-b-120px'>
      <Container>
        <div className='flex flex-col items-center mb-8 md:mb-16'>
          <h1 className='font-black text-center text-4xl md:text-6xl py-4 md:py-8'>WHAT SPORES DOES</h1>
          <img src={require('assets/icons/icon-bumb.png').default.src} />
        </div>
        <Grid container spacing={6} className='justify-center'>
          <Grid item xs={12} lg={3}>
            <div className='font-bold text-xl md:text-3xl text-center md:text-left uppercase'>
              SPORES NETWORD IS AN ASIAN-INFLUENCED WITH GLOBAL REACT CURATED NFT MARKETPLACE AND GAMEFI PUBLISHER
              HELPING ARTISTS, CREATORS, AND BRANDS ACTIVATE THE METAVERSE (WEB3).
            </div>
          </Grid>
          {[
            {
              name: 'NFT MARKETPLACE',
              cards: ['ART', 'GAMES', 'ENTERTAINMENT'],
              image: require('assets/images/works/gallery_marketplace.png').default.src,
            },
            {
              name: 'GAMEFI',
              cards: ['LAUNCHPAD', 'INCUBATOR'],
              image: require('assets/images/works/gallery_gamefi.png').default.src,
            },
            {
              name: 'VR GALLERY - RÉPUBLIQUE',
              cards: ['VR GALLERY - RÉPUBLIQUE', 'METAVERSE (WEB3)'],
              image: require('assets/images/works/gallery_vr.png').default.src,
            },
          ].map((item, index) => (
            <Grid item key={index} xs={12} sm={8} md={4} lg={3}>
              <div className='flex flex-col space-y-4'>
                <Button className='h-16'>{item.name}</Button>
                <div
                  style={{ background: `url(${item.image}) no-repeat center center / contain`, height: 240 }}
                  className='-mr-1'
                />
                {item.cards.map((card, index) => (
                  <Button key={index} variant='outlined' className='border-2 text-black h-16'>
                    {card}
                  </Button>
                ))}
              </div>
            </Grid>
          ))}
        </Grid>

        <div className='flex flex-col items-center mt-32 mb-16'>
          <h1 className='font-black text-center text-4xl md:text-6xl py-4 md:py-8'>CURATED NFT MARKETPLACE</h1>
          <img src={require('assets/icons/icon-bumb.png').default.src} />
        </div>
        <div className='flex flex-col space-y-12'>
          {[
            {
              gallery: 'ART',
              image: require('assets/images/works/market_art.png').default.src,
              title: 'Secondary Market',
              description: `A curated secondary market highlighting a collection of top 25-50 NFTs by category that have been hand-selected by our curation team.`,
            },
            {
              gallery: 'GAMES',
              image: require('assets/images/works/market_game.png').default.src,
              title: 'GameFi',
              description: `GameFi store is being seeded with 10 games in early Q1 2022 and has a scheduled of 2 games per month ongoing.`,
            },
            {
              gallery: 'ENTERTAINMENT',
              image: require('assets/images/works/market_enter.png').default.src,
              title: 'Entertainment Assets',
              description: `Includes celebrities and original content from film, TV, music, animation/anime and influencers.`,
            },
            {
              gallery: 'CORPORATE BRAND',
              image: require('assets/images/works/market_corp.png').default.src,
              title: 'Corporate Brand',
              description: `Partnerships to create original marketing and merchandising campaigns for customer rewarding and retention.`,
            },
          ].map((item, index) => (
            <div key={index}>
              <div className='flex flex-col lg:flex-row'>
                <div
                  style={{ background: `url(${item.image}) no-repeat center center`, maxWidth: 560, minHeight: 240 }}
                  className='flex-1 flex items-end rounded-3xl font-bold text-2xl text-white mb-6 md:mr-10 pl-10 pb-6 md:bg-contain'
                >
                  {item.gallery}
                </div>

                <div className='flex-1 flex flex-col-reverse justify-center'>
                  <div>
                    <div className='flex items-start mb-1'>
                      <img src={require('assets/icons/logo-primary-star.png').default.src} className='w-10 mr-2' />
                      <div className='font-bold text-2xl py-1'>{item.title}</div>
                    </div>
                    <div className='text-lg'>{item.description}</div>
                  </div>

                  {index === 0 && (
                    <div className='mb-6'>
                      <div className='flex items-start mb-1'>
                        <img src={require('assets/icons/logo-primary-star.png').default.src} className='w-10 mr-2' />
                        <div className='font-bold text-2xl py-1'>
                          Primary Market holds a Q1 2022 goal of 10k artists onboarded:
                        </div>
                      </div>
                      <div className='text-lg'>
                        {[
                          {
                            name: 'Silver',
                            content: `Entry point for artists who are vetted for quality and compatibility to Spores ethos.`,
                          },
                          { name: 'Gold', content: `Top 1% of Silver artists who are prominently.` },
                          { name: 'Platinum', content: `Wellknown / celebrity artists who drop at their discretion` },
                        ].map((item, index) => (
                          <div key={index}>
                            <span className='font-bold mr-1.5'>{item.name}</span>
                            <span>{item.content}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className='relative font-medium text-xl md:text-3xl text-center mt-40 py-20 px-6 md:px-20 rounded-3xl md:rounded-60px'
          style={{ backgroundColor: '#F2F2F2' }}
        >
          <div className='absolute left-0 right-0 -top-20 flex justify-center'>
            <img src={require('assets/icons/logo-primary-star.png').default.src} className='h-40' />
          </div>
          “One of the most unique aspects of the Spores Marketplace is that they encourage cross pollination across
          verticals. For example, if you are an artist who wants to get into games - Spores can help with the connective
          tissue. Or, if you are a celebrity who wants to collaborate with an artist and create a unique gallery
          experience - they can help with that too. You can see the myriad of exciting opportunities this can create!”
        </div>
      </Container>
    </div>
  );
};

export default Games;
