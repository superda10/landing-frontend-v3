import React from 'react';
import Banner from 'components/Banner';
import * as Api from '../../api/api';
import Ecosystem from './components/Ecosystem';
import SporesLaunchpad from './components/SporesLaunchpad';
import JoinGuide from './components/JoinGuide';
import OurPartners from './components/OurPartners';
import Team from './components/Team';
import Contact from './components/Contact';

const HomePage = () => {
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
    <div className=''>
      <div>
        <Banner pools={pools} />
      </div>
      <div>
        <Ecosystem />
      </div>
      <div>
        <SporesLaunchpad />
      </div>
      <div>
        <JoinGuide />
      </div>
      <div>
        <OurPartners />
      </div>
      <div>
        <Team />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
