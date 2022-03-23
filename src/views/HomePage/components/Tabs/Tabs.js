import React from 'react'
import classNames from 'classnames'
import classes from './Tabs.module.scss'

const Tabs = ({ currentTab, handleSelectTab, tabs }) => {
  return (
    <div className='flex items-center justify-center'>
      { tabs.map((tab) => (
        <div className={classNames(classes.tab, currentTab === tab.value && classes.active)}
          key={tab.value}
          onClick={() => handleSelectTab(tab.value)}
        >
          { tab.label }
        </div>
      )) }
    </div>
  )
}

export default Tabs
