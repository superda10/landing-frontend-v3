import React, { useState } from 'react';
import classNames from 'classnames';
import classes from './ContactUs.module.scss';
import GetSPO from 'components/GetSPO';
import SupportForm from 'views/Home/components/SupportForm';

const ContactUs = () => {
  const [type, setType] = useState('');
  const [showRequestSupport, setShowRequestSupport] = useState(false);

  return (
    <div className={classes.container}>
      <h2 className={'title text-center mb-20'}>Contact Us</h2>
      <div className={classNames('flex items-center justify-center mb-20', classes.actions)}>
        <a
          className={classNames('btn btn-black mx-8', classes.btn)}
          href='https://docs.google.com/forms/d/1K_GPDM6RmYbz60GWyEy9IKXUyEGBrRqlTnmqU8Gd1cw/viewform?edit_requested=true#settings'
          target='_blank'
          rel='noreferrer'
        >
          Apply To Launch
        </a>
        <a
          className={classNames('btn btn-black mx-8', classes.btn)}
          onClick={() => {
            setType('CUSTOMER_SUPPORT');
            setShowRequestSupport(true);
          }}
        >
          Customer Support
        </a>
        <a
          className={classNames('btn btn-main mx-8', classes.btn)}
          onClick={() => {
            setType('PARTNERSHIP');
            setShowRequestSupport(true);
          }}
        >
          Join Our Mailing List
        </a>
      </div>
      <div className={classes.getSPO}>
        <GetSPO />
      </div>
      <ul className={classNames('flex items-center justify-center mb-20', classes.socials)}>
        <li>
          <a href='https://spores.medium.com' target='_blank' rel='noreferrer'>
            <div className={classes.medium} />
          </a>
        </li>
        <li>
          <a href='https://facebook.com/SporesNetwork' target='_blank' rel='noreferrer'>
            <div className={classes.facebook} />
          </a>
        </li>
        <li>
          <a href='https://twitter.com/Spores_Network' target='_blank' rel='noreferrer'>
            <div className={classes.twitter} />
          </a>
        </li>
        <li>
          <a href='https://instagram.com/SporesNetwork' target='_blank' rel='noreferrer'>
            <div className={classes.instagram} />
          </a>
        </li>
        <li>
          <a href='https://discord.gg/FYcdCycv' target='_blank' rel='noreferrer'>
            <div className={classes.discord} />
          </a>
        </li>
        <li>
          <a href='https://t.me/SporesOfficial' target='_blank' rel='noreferrer'>
            <div className={classes.telegram} />
          </a>
        </li>
        <li>
          <a href='https://linkedin.com/company/SporesNetwork' target='_blank' rel='noreferrer'>
            <div className={classes.linkedin} />
          </a>
        </li>
      </ul>

      <SupportForm show={showRequestSupport} handleClose={() => setShowRequestSupport(false)} type={type} />
    </div>
  );
};

export default ContactUs;
