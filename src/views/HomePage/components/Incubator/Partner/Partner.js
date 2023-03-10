import React from 'react'
import classNames from 'classnames'
import classes from './Partner.module.scss'

const Partner = ({ showDetail, setShowDetail }) => {
  return (
    <div className={classNames(classes.container, showDetail && classes.showDetail)} >
      <img src={'/assets/images/cross/logo.png'} className={classes.logo} alt='logo'/>
      <div className={classes.description}>
        Game studio based in Hanoi with a 7-year experienced game developer, consisting of 30 full-time employees.
      </div>
      { !showDetail
        ? <a className={classes.btn} onClick={() => {setShowDetail(true)}}>
        Detail <img src='/assets/images/arrow.svg' className={classes.icon} />
      </a>
      : <a className={classes.link}
          onClick={() => {
            window.open('https://www.crosgames.com/')
          }}
      >
        <div className={classes.icon}></div>
        https://www.crosgames.com/
      </a>
      }
     
    </div>
  )
}

export default Partner
