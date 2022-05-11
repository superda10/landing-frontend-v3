import React from 'react';
import classes from './Launchpad.module.scss';
import FAQ from '../FAQ';
import Pools from '../Pools';
import LaunchpadTierSystem from '../LaunchpadTierSystem';
import Banners from 'views/Home/components/Banners';
import Slider from 'react-slick';
import * as Api from '../../../../api/api'

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
  const [pools, setPools] = React.useState({})

  React.useEffect(() => {
    const getPools = async () => {
      try {
        const result = await Api.get({
          url: '/pool/public/list'
        })
        const upcomingPools = []
        const livePools = []
        const endedPools = []

        result.data.forEach((pool) => {
          if (pool.poolStatus === 'UPCOMING') {
            upcomingPools.push(pool)
          }
          if (pool.poolStatus === 'LIVE') {
            livePools.push(pool)
          }
          if (pool.poolStatus === 'ENDED') {
            endedPools.push(pool)
          }
        })

        setPools({
          all: result.data,
          UPCOMING: upcomingPools,
          LIVE: livePools,
          ENDED: endedPools
        })
      } catch (e) {
        console.log(e)
      }
    }

    getPools()
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <Slider {...settings}>
          {pools.all?.filter((pool => !!pool.multipleTimes && pool.multipleTimes !== '0'))?.map((item, index) => (
            <div key={index}>
              <div className={classes.card}>
                <div className='flex justify-center items-center' style={{ height: 45, width: 45 }}><img src={item.logo} /></div>
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
    </div>
  );
};

export default Launchpad;
