import React from 'react'
import classNames from 'classnames'
import classes from './Partner.module.scss'

const Partner = ({ showDetail, setShowDetail }) => {
  return (
    <div className={classNames(classes.container, showDetail && classes.showDetail)} >
      <img src={'/assets/images/cross/logo.png'} className={classes.logo} alt='logo'/>
      <p className={classes.description}>
        Game studio based in Hanoi with a 7-year experienced game developer, consisting of 30 full-time employees.
      </p>
      { !showDetail
        ? <a className={classes.btn} onClick={() => {setShowDetail(true)}}>
        Detail <img src='/assets/images/arrow.svg' className={classes.icon} />
      </a>
      : <a className={classes.link}
          onClick={() => {
            window.open('https://www.crosgames.com/')
          }}
      >
        <img src='/assets/images/globe-black.svg' className={classes.icon} />
        https://www.crosgames.com/
      </a>
      }
     
    </div>
  )
}

export default Partner
