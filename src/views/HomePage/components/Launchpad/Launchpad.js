import React from 'react';
import classes from './Launchpad.module.scss';
import FAQ from '../FAQ';
import Pools from '../Pools';
import LaunchpadTierSystem from '../LaunchpadTierSystem';
import Banners from 'views/Home/components/Banners';
import Slider from 'react-slick';
import * as Api from '../../../../api/api';

const settings = {
  className: 'slider variable-width',
  dots: false,
  infinite: true,
  speed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  arrows: false,
  variableWidth: true,
};

const Launchpad = () => {
  const [pools, setPools] = React.useState({});

  React.useEffect(() => {
    const getPools = async () => {
      try {
        const result = await Api.get({
          url: '/pool/public/list',
        });
        const upcomingPools = [];
        const livePools = [];
        const endedPools = [];

        result.data.forEach((pool) => {
          if (pool.poolStatus === 'UPCOMING') {
            upcomingPools.push(pool);
          }
          if (pool.poolStatus === 'LIVE') {
            livePools.push(pool);
          }
          if (pool.poolStatus === 'ENDED') {
            endedPools.push(pool);
          }
        });

        setPools({
          all: result.data,
          UPCOMING: upcomingPools,
          LIVE: livePools,
          ENDED: endedPools,
        });
      } catch (e) {
        console.log(e);
      }
    };

    getPools();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <Slider {...settings}>
          {pools.all
            ?.filter((pool) => !!pool.multipleTimes && pool.multipleTimes !== '0')
            ?.map((item, index) => (
              <div key={index}>
                <div className={classes.card}>
                  <div className='flex justify-center items-center' style={{ height: 45, width: 45 }}>
                    <img src={item.logo} />
                  </div>
                  <div>
                    <div className='font-bold'>{item.name}</div>
                    <div className='text-sm'>{item.multipleTimes ?? 1}x</div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>

      <div className={classes.banner}>
        <Banners />
      </div>

      <Pools pools={pools} />

      <LaunchpadTierSystem />

      <FAQ />

      <div className='mx-auto' style={{ maxWidth: 1000 }}>
        <div
          id='cr-widget-marquee'
          data-coins='bitcoin,ethereum,ripple,bnb,cardano,matic-network,solana'
          data-theme='light'
          data-show-symbol='true'
          data-show-icon='true'
          data-show-period-change='true'
          data-period-change='24H'
          data-api-url='https://api.cryptorank.io/v0'
          className='mb-2'
        >
          <a href='https://cryptorank.io'>Coins by Cryptorank</a>
          <script src='https://cryptorank.io/widget/marquee.js'></script>
        </div>
        <div className='text-sm flex gap-1.5 items-center justify-center' style={{ color: '#B1B5C3' }}>
          POWER BY
          <a
            href='https://cryptorank.io/?utm_source=Spores&utm_medium=cpc&utm_campaign=spores-launchpad'
            rel='noreferrer'
            target='_blank'
          >
            <img src={require('assets/images/cryptorank-logo.svg').default.src} className='h-4'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Launchpad;
