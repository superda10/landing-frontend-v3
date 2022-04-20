import React, { useState } from 'react';
import classNames from 'classnames';
import SupportForm from 'views/Home/components/SupportForm';
import classes from './SideMenus.module.scss';

const SideMenus = () => {
  const [type, setType] = useState('');
  const [showRequestSupport, setShowRequestSupport] = useState(false);

  return (
    <div className={classes.menus}>
      <div className={classes.menu}>
        <a className={classes.btn} href='https://t.me/sporesofficial' target='_blank' rel='noreferrer'>
          <span className={classNames(classes.label)}>Announcement</span>
          <img src='/assets/images/side-menus/announcement.svg' className={classes.icon} alt='icon' />
        </a>
      </div>
      <div className={classes.menu}>
        <a className={classes.btn} href='https://t.me/SporesOfficial' target='_blank' rel='noreferrer'>
          <span className={classes.label}>Telegram</span>
          <img src='/assets/images/side-menus/telegram.svg' className={classes.icon} alt='icon' />
        </a>
      </div>
      <div className={classes.menu}>
        <a
          className={classes.btn}
          onClick={() => {
            setType('CUSTOMER_SUPPORT');
            setShowRequestSupport(true);
          }}
        >
          <span className={classes.label}>Customer Support</span>
          <img src='/assets/images/side-menus/customer-support.svg' className={classes.icon} alt='icon' />
        </a>
      </div>
      <div className={classes.menu}>
        <a className={classes.menuContent}>
          <div className={classes.links}>
            <a
              className={classes.btnLink}
              href='https://app.uniswap.org/#/swap?outputCurrency=0xcbE771323587EA16dACB6016e269D7F08A7ACC4E'
              target='_blank'
              rel='noreferrer'
            >
              <img src='/assets/images/getspo/uniswap.png' className={classes.uniswap} />
            </a>
            <a
              className={classes.btnLink}
              href='https://pancakeswap.finance/swap?outputCurrency=0x8357c604c5533fa0053BeAaA1494Da552ceA38f7'
              target='_blank'
              rel='noreferrer'
            >
              <img src='/assets/images/getspo/pancakeswap.png' className={classes.pancakeswap} />
            </a>
            <a className={classes.btnLink} href='https://www.gate.io/trade/SPO_USDT' target='_blank' rel='noreferrer'>
              <img src='/assets/images/getspo/gateio.png' className={classes.gateio} />
            </a>
          </div>
          <img src='/assets/images/side-menus/spore.svg' className={classes.icon} alt='icon' />
        </a>
      </div>

      <SupportForm show={showRequestSupport} handleClose={() => setShowRequestSupport(false)} type={type} />
    </div>
  );
};

export default SideMenus;
