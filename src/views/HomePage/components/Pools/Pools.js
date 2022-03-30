import React, { useState, useMemo } from 'react'
import classes from './Pools.module.scss'
import Tabs from '../Tabs'
import SliderComponent from 'views/Home/components/SliderComponent'
import * as Api from '../../../../api/api'
import PoolItem from '../PoolItem'


const Pools = () => {
  const [currentTab, setCurrentTab] = useState('UPCOMING')
  const [pools, setPools] = useState({})
  const [tabs, setTabs] = useState([])

  const handleSelectTab = (tab) => {
    setCurrentTab(tab)

  }

  useState(() => {
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
          UPCOMING: upcomingPools,
          LIVE: livePools,
          ENDED: endedPools
        })

        const poolTabs = []

        if (upcomingPools.length > 0) {
          poolTabs.push({
            label: 'Upcoming',
            value: 'UPCOMING'
          })
          setCurrentTab('UPCOMING')
        }
        if (livePools.length > 0) {
          poolTabs.push({
            label: 'Live',
            value: 'LIVE'
          })
          if (upcomingPools.length === 0) {
            setCurrentTab('LIVE')
          }
        }
        if (endedPools.length > 0) {
          poolTabs.push({
            label: 'Ended',
            value: 'ENDED'
          })
          if (upcomingPools.length === 0 && livePools.length === 0) {
            setCurrentTab('ENDED')
          }
        }

        setTabs(poolTabs)


      } catch(e) {
        console.log(e)
      }
    }

    getPools()
  }, [])

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