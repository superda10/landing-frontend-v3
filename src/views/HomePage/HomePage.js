import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import classes from './HomePage.module.scss'
import Launchpad from './components/Launchpad'
import Marketplace from './components/Marketplace'
import PartnerWithUs from './components/PartnerWithUs'
import Menus from './components/Menus'
import SupportForm from 'views/Home/components/SupportForm'

const TABS = [{
  label: 'Launchpad',
  value: 'LAUNCHPAD'
}, {
  label: 'Marketplace',
  value: 'MARKETPLACE'
}, {
  label: 'Partner with Us',
  value: 'PARTNER_WITH_US'
}]

const HomePage = () => {
  const [currentTab, setCurrentTab] = useState('LAUNCHPAD')

  return (
    <div className={classes.contaniner}>
      <Menus currentTab={currentTab}
        handleSelectTab={setCurrentTab}
        tabs={TABS}
      />

      { currentTab === 'LAUNCHPAD'
        && <Launchpad />
      }
      
      { currentTab === 'MARKETPLACE'
        && <Marketplace />
      }
      
      { currentTab === 'PARTNER_WITH_US'
        && <PartnerWithUs />
      }

      <ToastContainer />
      
    </div>
  )
}

export default HomePage
