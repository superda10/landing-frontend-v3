import React from 'react'
import classNames from 'classnames'
import classes from './Menus.module.scss'

const Menus = ({ currentTab, handleSelectTab, tabs }) => {
  return (
    <div className={classNames('flex items-center justify-center', classes.container)}>
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

export default Menus
