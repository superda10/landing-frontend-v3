import React from 'react'
import classes from './Launchpad.module.scss'
import FAQ from '../FAQ'
import Pools from '../Pools'
import LaunchpadTierSystem from '../LaunchpadTierSystem'
import Banners from 'views/Home/components/Banners'

const Launchpad = () => {
  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <Banners />
      </div>
      

      <Pools />

      <LaunchpadTierSystem />

      <FAQ />
    </div>
  )
}

export default Launchpad