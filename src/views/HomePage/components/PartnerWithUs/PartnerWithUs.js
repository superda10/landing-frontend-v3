import React, { useState } from 'react'
import classes from './PartnerWithUs.module.scss'
import Tabs from '../Tabs'
import AmbassadorProgram from '../AmbassadorProgram'
import Incubator from '../Incubator'

const TABS = [{
  label: 'Incubator',
  value: 'INCUBATOR'
}, {
  label: 'Ambassador Program',
  value: 'AMBASSADOR_PROGRAM'
}]

const PartnerWithUs = () => {
  const [currentTab, setCurrentTab] = useState('INCUBATOR')
  return (
    <div className={classes.container}>
      <Tabs tabs={TABS}
        currentTab={currentTab}
        handleSelectTab={setCurrentTab}
      />

      <div className={classes.content}>
        { currentTab === 'INCUBATOR'
          && <Incubator />
        }
        { currentTab === 'AMBASSADOR_PROGRAM'
          && <AmbassadorProgram />
        }
      </div>
      
      <Tabs tabs={TABS}
        currentTab={currentTab}
        handleSelectTab={setCurrentTab}
      />
    </div>
  )
}

export default PartnerWithUs
