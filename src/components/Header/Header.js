import React, { useState } from 'react'
import classNames from 'classnames'
import classes from './Header.module.scss'
import Link from 'next/link'

const Header = () => {
  const [ show, setShow ] = useState(false)
  return (
    <div className={classNames('flex items-center justify-between', classes.container)}>
      <Link href='/'>
        <a>
          <img src='/assets/logos/logo_primary.svg' className={classes.logo} alt='logo'/>
        </a>
      </Link>
      <a className={classes.btnMenu}
        onClick={() => {setShow(prev => !prev)}}
      >
        <img src='/assets/images/hamberger.svg' className={classes.hambeger} alt='hambeger' />
      </a>
      <ul className={classNames(classes.menus, show && classes.show)}>
        <li>
          <Link href='/about'>
            <a onClick={() => {setShow(false)}}>
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href='/team'>
            <a onClick={() => {setShow(false)}}>
              Team
            </a>
          </Link>
        </li>
        <li>
          <Link href='/news'>
            <a onClick={() => {setShow(false)}}>
              News
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
 
}

export default Header
