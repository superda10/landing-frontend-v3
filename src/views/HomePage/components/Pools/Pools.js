import React, { useState, useMemo } from 'react'
import classes from './Pools.module.scss'
import Tabs from '../Tabs'
import SliderComponent from 'views/Home/components/SliderComponent'
import PoolItem from '../PoolItem'


const Pools = ({pools={}}) => {
  const [currentTab, setCurrentTab] = useState('UPCOMING')
  const [tabs, setTabs] = useState([])

  const handleSelectTab = (tab) => {
    setCurrentTab(tab)

  }

  React.useEffect(() => {
    const poolTabs = []

    if (pools.UPCOMING?.length > 0) {
      poolTabs.push({
        label: 'Upcoming',
        value: 'UPCOMING'
      })
      setCurrentTab('UPCOMING')
    }
    if (pools.LIVE?.length > 0) {
      poolTabs.push({
        label: 'Live',
        value: 'LIVE'
      })
      if (pools.UPCOMING?.length === 0) {
        setCurrentTab('LIVE')
      }
    }
    if (pools.ENDED?.length > 0) {
      poolTabs.push({
        label: 'Ended',
        value: 'ENDED'
      })
      if (pools.UPCOMING?.length === 0 && pools.LIVE?.length === 0) {
        setCurrentTab('ENDED')
      }
    }

    setTabs(poolTabs)
  }, [pools.ENDED?.length, pools.LIVE?.length, pools.UPCOMING?.length])

  const currentPools = useMemo(() => {
    return pools[currentTab] || []
  }, [currentTab, pools])

  return (
    <div className={classes.container}>
      <h2 className='title text-center mb-20'>Pools</h2>
      <div className={classes.tabs}>
        <Tabs tabs={tabs} currentTab={currentTab}
          handleSelectTab={handleSelectTab}
        />
      </div>
      
        { currentPools.length > 3
          ? <div className={classes.pollSlide}>
            <SliderComponent data={currentPools}
                slidesToScroll={currentPools.length >= 3 ? 3 : currentPools.length}
                slidesToShow={currentPools.length >= 3 ? 3 : currentPools.length}
              >
                { currentPools.map((item) => (
                  <div key={item.id} className={classes.pool}>
                    <PoolItem item={item}/>
                  </div>
                  
                )) }
              </SliderComponent>
            </div>
            :
            <div className={classes.pools}>
            { currentPools.map((item) => (
              <div key={item.id} className={classes.pool}>
                <PoolItem item={item}/>
              </div>
              
            )) }
            </div>
        }
      
    </div>
  )
}

export default Pools