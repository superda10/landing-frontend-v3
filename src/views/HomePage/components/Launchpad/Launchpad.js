import React from 'react';
import classes from './Launchpad.module.scss';
import FAQ from '../FAQ';
import Pools from '../Pools';
import LaunchpadTierSystem from '../LaunchpadTierSystem';
import Banners from 'views/Home/components/Banners';

const Launchpad = () => {
  return (
    <div className={classes.container}>
      <div className={classes.list}>
        {[
          { name: 'ritestream', logo: '/assets/logos/ritestream.png', value: '4.5x' },
          { name: 'Wizardia', logo: '/assets/logos/wizardia.png', value: '7.2x' },
          { name: 'Supernova', logo: '/assets/logos/supernova.png', value: '4.07x' },
          { name: 'Karmaverse', logo: '/assets/logos/karmaverse.png', value: '2.3x' },
          { name: 'Animal Concerts', logo: '/assets/logos/animalconcert.png', value: '8.44x' },
        ].map((item, index) => (
          <div key={index} className={classes.card}>
            <img src={item.logo} style={{ height: 45, width: 45 }} />
            <div>
              <div className='font-bold'>{item.name}</div>
              <div className='text-sm'>{item.value}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.banner}>
        <Banners />
      </div>

      <Pools />

      <LaunchpadTierSystem />

      <FAQ />
    </div>
  );
};

export default Launchpad;
