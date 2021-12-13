import { Twitter } from '@mui/icons-material';
import { Container, Grid, Link } from '@mui/material';
import { ColorButton } from 'components';

const News = () => {
  return (
    <Container>
      <div
        id='news'
        className='relative py-20 md:py-32 px-4 md:px-16 rounded-t-60px'
        style={{ backgroundColor: '#2B2B2B' }}
      >
        <img
          src={require('assets/icons/icon-hand.png').default.src}
          className='absolute left-0 top-0'
          style={{ transform: 'translateX(-30%) translateY(-50%)' }}
        />
        <img
          src={require('assets/icons/logo-primary-star-alt.png').default.src}
          className='hidden xl:block absolute right-0 top-0'
          style={{ transform: 'translateX(50%) translateY(-50%)' }}
        />

        <div className='flex flex-col items-center mb-16'>
          <h1 className='font-black text-center text-4xl md:text-6xl text-white py-4 md:py-8'>SPORES NEWS</h1>
          <img src={require('assets/icons/icon-bumb.png').default.src} />
        </div>

        <div className='bg-primary-main w-full h-0.5 my-6' />
        <div className='font-medium text-2xl text-primary-main mb-6'>PRESS RELEASES</div>
        <Grid container spacing={3} className='mb-24'>
          {[
            {
              title: 'Spores Staking Campaign',
              description: `Spores Network, the leading Asia-influenced NFT marketplace, has updated its platform to reflect an entirely new NFT ecosystem that is powered through a curated marketplace — art, gaming, and entertainment — combined with a GameFi launchpad and enhanced through a proprietary games publishing platform activating IDO, IGO, and INO opportunities.`,
              url: 'https://link.medium.com/srelCjwNVlb',
              image: require('assets/images/news/news-1.png').default.src,
            },
            {
              title: 'Spores x Plushie Dreadfuls Collection',
              description: `American McGee is an influential figure best known as the designer of his signature game American McGee’s Alice and its sequence Alice: Madness Returns, a psychological horror game set in the world of the classic “Alice in Wonderland.” His Alice game series have gained worldwide success.`,
              url: 'https://link.medium.com/5DDY5rxNVlb',
              image: require('assets/images/news/news-2.png').default.src,
            },
            {
              title: 'Spores X Immortal Studios Announce NFT Partnership',
              description: `Spores Network is pleased to announce an exciting NFT partnership with Immortal Studios, bringing them into our curated portfolio of projects. Immortal Studios is an original content studio dedicated to creating stories in the Chinese martial arts fantasy genre known as Wuxia and bringing Asian faces and culture to the global pop culture stage.`,
              url: 'https://link.medium.com/nRleRtCNVlb',
              image: require('assets/images/news/news-3.png').default.src,
            },
            {
              title: 'Spores Network Announces Its Expanded NFT Ecosystem Solution',
              description: `Spores Network, the leading Asia-influenced NFT marketplace, has updated its platform to reflect an entirely new NFT ecosystem that is powered through a curated marketplace — art, gaming, and entertainment — combined with a GameFi launchpad and enhanced through a proprietary games publishing platform activating IDO, IGO, and INO opportunities. Spores now enables artists, content creators, and brands to activate the Metaverse (Web3) by bridging digital and physical experiences.`,
              url: 'https://link.medium.com/qdEoJnHNVlb',
              image: require('assets/images/news/news-4.png').default.src,
            },
          ].map((item, index) => (
            <Grid item key={index} md={6} lg={3}>
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
                  <ColorButton component={Link} href={item.url} target='_blank'>
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
              content: `📣 Participate in our Staking Program today to earn up to 80% APY and special prizes.\n+ Additional surprises! 🎁\nLimited supply for early stakers, don't sleep on the deadline 12.12.2021 💥`,
              url: 'https://twitter.com/Spores_Network/status/1468970257356230669?t=UxEczOTNuwTEWTg0hroQ2g&s=19',
              image: require('assets/images/news/news-5.png').default.src,
            },
            {
              icon: <Twitter style={{ color: '#03A9F4' }} />,
              author: 'Spores Network',
              content: `@Spores_Network is excited to form a strategic partnership with @SupraOracles to ensure accurate NFT listings in multiple currencies. As Spores expands, we will look to scout new data feeds and incorporate more innovation 💥`,
              url: 'https://twitter.com/Spores_Network/status/1469245255761346561?t=lYB0px9dMnJ2moXMJoU7Qw&s=19',
              image: require('assets/images/news/news-6.png').default.src,
            },
            {
              icon: <Twitter style={{ color: '#03A9F4' }} />,
              author: 'Spores Network',
              content: `@AskDuc joins @Forkast_News to talk about all things NFTs for the holiday at 2:40💥\nMore celebrities & brands are hopping on the NFT parade💃`,
              url: 'https://twitter.com/Spores_Network/status/1468914962118574085?t=GO6sDOBl6Gs32wM2ZCKKcw&s=19',
              image: require('assets/images/news/news-7.png').default.src,
            },
            {
              icon: <Twitter style={{ color: '#03A9F4' }} />,
              author: 'Spores Network',
              content: `What’s about to explode in December? It’s 💥SPORES x PLUSHIE DREADFULS💥\nSpores is partnering with legendary game designer @americanmcgee to launch his Plushie Dreadfuls NFT collectibles exclusively on Spores Network.`,
              url: 'https://twitter.com/Spores_Network/status/1467904266295676929?t=rdJ1uthSciWGa4MMGYs6dw&s=19',
              image: require('assets/images/news/news-8.png').default.src,
            },
          ].map((item, index) => (
            <Grid item key={index} md={6} lg={3}>
              <div className='bg-white rounded-lg pb-4'>
                <div className='flex flex-col items-start justify-between h-52 p-4'>
                  <div className='mb-4'>
                    <div className='flex items-center space-x-2'>
                      {item.icon}
                      <div className='font-bold max-line-1'>{item.author}</div>
                    </div>
                    <div className='text-sm max-line-5 mt-2 whitespace-pre-line'>{item.content}</div>
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
