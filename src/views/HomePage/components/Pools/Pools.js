import React, { useState } from 'react'
import classes from './Pools.module.scss'
import Tabs from '../Tabs'
import SliderComponent from 'views/Home/components/SliderComponent'
import PoolItem from '../PoolItem'

const TABS = [{
  label: 'Upcoming',
  value: 'UPCOMING'
}, {
  label: 'Live',
  value: 'LIVE'
}, {
  label: 'Ended',
  value: 'ENDED'
}]

const poolsUpcoming = [{
  logo: '/assets/images/pools/Supernova.svg',
  poolName: 'Supernova',
  type: 'LFC',
  totalRaise: '$30,000',
  start: '23 March 2022 13:00',
  end: '24 March 2022 14:00 (UTC)',
  price: '1 LFC = $0.30',
  registrationEnd: '22 hours, 5 minutes',
  percent: '0%',
  current: '0',
  id: 1
}, {
  logo: '/assets/images/pools/Supernova2.svg',
  poolName: 'Supernova',
  type: 'ANML',
  totalRaise: '$50,000',
  start: '25 March 2022 13:00',
  end: '26 March 2022 16:00 (UTC)',
  price: '1 ANML = $0.0.0045',
  registrationEnd: '22 hours, 5 minutes',
  percent: '0%',
  current: '0',
  id: 2
}, {
  logo: '/assets/images/pools/karmaverse.svg',
  poolName: 'Karmaverse',
  type: 'KNOT',
  totalRaise: '$50,000',
  start: '25 March 2022 13:00',
  end: '26 March 2022 14:00 (UTC)',
  price: '1 KNOT = $0.50',
  registrationEnd: '22 hours, 5 minutes',
  percent: '0%',
  current: '0',
  id: 3
}]

const poolsLive = []

const poolsEnded = [{
  logo: '/assets/images/pools/wizardia.svg',
  poolName: 'Wizardia',
  type: 'WZRD',
  totalRaise: '$30,000',
  start: '17 March 2022 13:00',
  end: '19 March 2022 14:00 (UTC)',
  price: '1 WZRD = $0.12',
  poolStatus: 'ENDED',
  percent: '100%',
  current: '$30,000',
  id: 1
}, {
  logo: '/assets/images/pools/ritestream.svg',
  poolName: 'Ritestream',
  type: 'ANML',
  totalRaise: '$30,000',
  start: '8 March 2022 13:00',
  end: '9 March 2022 6:00 (UTC)',
  price: '1 RITE = $0.04',
  poolStatus: 'ENDED',
  percent: '100%',
  current: '$30,000',
  id: 2
}]

const Pools = () => {
  const [currentTab, setCurrentTab] = useState('UPCOMING')
  const [pools, setPools] = useState(poolsUpcoming)
  const handleSelectTab = (tab) => {
    setCurrentTab(tab)
    if (tab === 'UPCOMING') {
      setPools(poolsUpcoming)
    } else if (tab === 'LIVE') {
      setPools(poolsLive)
    } else if (tab === 'ENDED') {
      setPools(poolsEnded)
    }
  }

  return (
    <div className={classes.container}>
      <h2 className='title text-center mb-20'>Pools</h2>
      <div className={classes.tabs}>
        <Tabs tabs={TABS} currentTab={currentTab}
          handleSelectTab={handleSelectTab}
        />
      </div>
      <div className={classes.pools}>
        <SliderComponent data={pools}
          slidesToScroll={pools.length >= 3 ? 3 : pools.length}
          slidesToShow={pools.length >= 3 ? 3 : pools.length}
        >
          { pools.map((item) => (
            <div key={item.id} className={classes.pool}>
              <PoolItem item={item}/>
            </div>
            
          )) }
        </SliderComponent>
      </div>
      
    </div>
  )
}

export default Pools