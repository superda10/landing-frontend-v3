import { Twitter } from '@mui/icons-material';
import { Container, Grid, Link } from '@mui/material';
import { ColorButton } from 'components';

const News = () => {
  return (
    <Container>
      <div className='relative py-32 px-16' style={{ backgroundColor: '#2B2B2B' }}>
        <img
          src={require('assets/icons/icon-hand.png').default.src}
          className='absolute left-0 top-0'
          style={{ transform: 'translateX(-30%) translateY(-50%)' }}
        />
        <img
          src={require('assets/icons/logo-primary-star.png').default.src}
          className='absolute right-0 top-0'
          style={{ transform: 'translateX(50%) translateY(-50%)' }}
        />

        <div className='flex flex-col items-center mb-16'>
          <h1 className='font-bold text-6xl text-white py-8'>SPORES NEWS</h1>
          <img src={require('assets/icons/icon-bumb.png').default.src} />
        </div>

        <div className='bg-primary-main w-full h-0.5 my-6' />
        <div className='font-medium text-2xl text-primary-main mb-6'>PRESS RELEASES</div>
        <Grid container spacing={3} className='mb-24'>
          {[
            {
              title: 'SPORES LAB - CARDANO CHALLENGE CLOSING',
              description: `At Spores, we’re committed to support and foster growth within the blockchain community. As part of our grand effort to be a cross-chain marketplace, we’re actively working to build on the Cardano ecosystem. On October 1st, we announced our Cardano Challenge`,
              url: 'https://spores.app/explore',
              image: require('assets/images/news/news-1.png').default.src,
            },
            {
              title: 'Network for NFTs',
              description: `LOS ANGELES — Nov. 3, 2021 — Spores Network, a full-stack NFT-DeFi platform, has announced an artistic partnership with the acclaimed U.S. contemporary pop artist Todd Gray. The announcement was made last night at a private dinner in New York City attended by`,
              url: 'https://spores.app/explore',
              image: require('assets/images/news/news-2.png').default.src,
            },
            {
              title: 'Spores x Super BOOMi Collection is coming to you this holiday season',
              description: `If you had the chance to invest in Disney, pre-IPO, would you? UP Studios and Tencent-backed biggest animation franchise, Super BOOMi is coming to Spores Network! Super BOOMi is an action-adventure series featuring a wondrous virtual reality game universe, and has been a breakthrough`,
              url: 'https://spores.app/explore',
              image: require('assets/images/news/news-3.png').default.src,
            },
            {
              title: 'Kuruma NFT to launch premier auto enthusiast NFT marketplace',
              description: `The automotive metaverse is here. Kuruma NFT Inc. will be launching an NFT platform where users can buy, sell and trade NFTs (Non-Fungible Tokens) in a dedicated online setting called the “autoverse.” With the recent emergence of NFTs as a decentralized form`,
              url: 'https://spores.app/explore',
              image: require('assets/images/news/news-4.png').default.src,
            },
          ].map((item, index) => (
            <Grid item key={index} xl={3}>
              <div className='bg-white rounded-lg pt-2'>
                <div style={{ background: `url(${item.image}) no-repeat center center / cover` }} className='h-40' />
                <div className='flex flex-col items-start justify-between h-80 p-4'>
                  <div className='mb-4'>
                    <Link
                      href={item.url}
                      className='font-bold text-black hover:text-primary-main max-line-2'
                      title={item.title}
                    >
                      {item.title}
                    </Link>
                    <div className='text-sm max-line-8 mt-2'>{item.description}</div>
                  </div>
                  <ColorButton component={Link} href={item.url}>
                    Learn more
                  </ColorButton>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>

        <div className='bg-primary-main w-full h-0.5 my-6' />
        <div className='font-medium text-2xl text-primary-main mb-6'>SOCIALS</div>
        <Grid container spacing={3}>
          {[
            {
              icon: <Twitter style={{ color: '#03A9F4' }} />,
              author: 'Spores Network',
              content: `📣 SUPER BOOMi PUBLIC SALE Spores X Super BOOMi General Public Sale starts December 14th, 2021. Presale buyers can also claim Loot Boxes on that Presale buyers can also claim Loot Boxes on that`,
              url: 'https://spores.app/explore',
              image: require('assets/images/news/news-5.png').default.src,
            },
            {
              icon: <Twitter style={{ color: '#03A9F4' }} />,
              author: 'Spores Network',
              content: `📣 SUPER BOOMi PUBLIC SALE Spores X Super BOOMi General Public Sale starts December 14th, 2021. Presale buyers can also claim Loot Boxes on that Presale buyers can also claim Loot Boxes on that`,
              url: 'https://spores.app/explore',
              image: require('assets/images/news/news-6.png').default.src,
            },
            {
              icon: <Twitter style={{ color: '#03A9F4' }} />,
              author: 'Spores Network',
              content: `📣 SUPER BOOMi PUBLIC SALE Spores X Super BOOMi General Public Sale starts December 14th, 2021. Presale buyers can also claim Loot Boxes on that Presale buyers can also claim Loot Boxes on that`,
              url: 'https://spores.app/explore',
              image: require('assets/images/news/news-7.png').default.src,
            },
            {
              icon: <Twitter style={{ color: '#03A9F4' }} />,
              author: 'Spores Network',
              content: `📣 SUPER BOOMi PUBLIC SALE Spores X Super BOOMi General Public Sale starts December 14th, 2021. Presale buyers can also claim Loot Boxes on that Presale buyers can also claim Loot Boxes on that`,
              url: 'https://spores.app/explore',
              image: require('assets/images/news/news-8.png').default.src,
            },
          ].map((item, index) => (
            <Grid item key={index} xl={3}>
              <div className='bg-white rounded-lg pb-4'>
                <div className='flex flex-col items-start justify-between h-52 p-4'>
                  <div className='mb-4'>
                    <div className='flex items-center space-x-2'>
                      {item.icon}
                      <div className='font-bold max-line-1'>{item.author}</div>
                    </div>
                    <div className='text-sm max-line-5 mt-2'>{item.content}</div>
                  </div>
                  <Link href={item.url} className='font-medium text-sm text-blue-500 hover:text-blue-700'>
                    Read More {'>>'}
                  </Link>
                </div>
                <div style={{ background: `url(${item.image}) no-repeat center center / cover` }} className='h-40' />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default News;
