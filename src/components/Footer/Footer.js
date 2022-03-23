import React from 'react'
import classNames from 'classnames'
import classes from './Footer.module.scss'
import { Container, Link } from '@mui/material'

const Footer = () => {
  return (
    <Container>
      <div className={classes.container}>
        <div className={classes.left}>
          <div>
            <h4 className={classes.title}>
              Menu
            </h4>
            <div className={classNames(classes.row, classes.mr100)}>
              <ul className={classNames(classes.menus, classes.mr50)}>
                <li>
                  <a>
                    Launchpad
                  </a>
                </li>
                <li>
                  <a>
                    Marketplace
                  </a>
                </li>
                <li>
                  <a>
                    Partner with us
                  </a>
                </li>
              </ul>
              <ul className={classNames(classes.menus, classes.mr50)}>
                <li>
                  <Link href='/about'>
                    <a>
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/team'>
                    <a>
                      Team
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/news'>
                    <a>
                      News
                    </a>
                  </Link>
                </li>
              </ul>
              <ul className={classNames(classes.menus)}>
                <li>
                  <a>
                    Connect
                  </a>
                </li>
                <li>
                  <ul className={'flex items-center'}>
                    <li className='mx-8'>
                      <a >
                        <img src='/assets/images/socials/medium.svg' className={classes.socialIcon} alt='icon'/>
                      </a>
                    </li>
                    <li className='mx-8'>
                      <a>
                        <img src='/assets/images/socials/instagram.svg' className={classes.socialIcon} alt='icon'/>
                      </a>
                    </li>
                    <li className='mx-8'>
                      <a>
                        <img src='/assets/images/socials/printest.svg' className={classes.socialIcon} alt='icon'/>
                      </a>
                    </li>
                    <li className='mx-8'>
                      <a>
                        <img src='/assets/images/socials/facebook.svg' className={classes.socialIcon} alt='icon'/>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className={'flex items-center'}>
                    <li className='mx-8'>
                      <a>
                        <img src='/assets/images/socials/telegram.svg' className={classes.socialIcon} alt='icon'/>
                      </a>
                    </li>
                    <li className='mx-8'>
                      <a>
                        <img src='/assets/images/socials/twitter.svg' className={classes.socialIcon} alt='icon'/>
                      </a>
                    </li>
                    <li className='mx-8'>
                      <a>
                        <img src='/assets/images/socials/youtube.svg' className={classes.socialIcon} alt='icon'/>
                      </a>
                    </li>
                    <li className='mx-8'>
                      <a>
                        <img src='/assets/images/socials/linkedin.svg' className={classes.socialIcon} alt='icon'/>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.group}>
            <h4 className={classes.title}>
              Legal
            </h4>
            <ul className={classes.menus}>
              <li>
                <Link href='/'>
                  <a>
                    Term of use
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>
                    Cookie Statement
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <img src='/assets/logos/logo_primary.svg' className={classes.logo} alt='logo'/>
      </div>
    </Container>
  )
}

export default Footer
