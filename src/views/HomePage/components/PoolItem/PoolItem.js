import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import classes from './PoolItem.module.scss';

const PoolItem = ({ item }) => {
  return (
    <div className={classes.container}>
      <div className={classNames(classes.content, classes.bb1)}>
        <a href={item.learnMore} target='_blank' rel='noreferrer'>
          <div className='flex items-center mb-12'>
            <div className='flex items-center justify-center' style={{ height: '70px' }}>
              <img src={item.logo} className={classNames(classes.logo, item.logoClass)} alt='logo' />
            </div>

            <div className='flex-1'>
              <h4 className={classes.name}>{item.name}</h4>
              <div className={classes.text}>{item.symbol}</div>
            </div>
          </div>
        </a>

        <div className='flex mb-2 items-end justify-between'>
          <div className={classes.label}>Total Raise</div>
          <div className={classes.totalRaise}>{item.totalRaise}</div>
        </div>
        <div className='flex mb-2 items-start justify-between'>
          <div className={classes.label}>Start/End</div>
          <div className={classes.textRight}>
            {moment(item.startDate, 'MM/DD/YYYY HH:mm').format('DD MMMM YYYY HH:mm')} <br />
            {moment(item.endDate, 'MM/DD/YYYY HH:mm').format('DD MMMM YYYY HH:mm')} UTC
          </div>
        </div>
        <div className='flex mb-2 items-end justify-between'>
          <div className={classes.label}>Price</div>
          <div className={classes.text}>{item.price}</div>
        </div>
      </div>

      <div className={classes.content}>
        {item.poolStatus === 'ENDED' && (
          <>
            <div className='flex items-center justify-between'>
              {item.poolStatus === 'ENDED' ? (
                <div className={classes.text}>Closed</div>
              ) : (
                <div className={classes.text}>Registration ends: {item.registrationEnd}</div>
              )}

              <div className={classes.text}>{item.progress}</div>
            </div>

            <div className={classes.progressWrapper}>
              <div className={classes.progress} style={{ width: `${item.progress}` }} />
            </div>

            <div className='flex items-center justify-between mb-26'>
              {/* <div className={classes.text2}>
            {item.currentValue}
          </div> */}
              <div />

              <div className={classes.text2}>
                {item.currentValue} / {item.totalRaise}
              </div>
            </div>
          </>
        )}

        <div className='flex items-center justify-between'>
          <a className='btn btn-main btn-small' href={item.learnMore} target='_blank' rel='noreferrer'>
            Learn more
          </a>

          <div className='flex items-center'>
            <a className='mx-1' href={item.website} target='_blank' rel='noreferrer'>
              <img src='/assets/images/globe.svg' className={classes.icon} />
            </a>
            <a className='mx-1' href={item.twitter} target='_blank' rel='noreferrer'>
              <img src='/assets/images/twitter.svg' className={classes.icon} />
            </a>
            <a className='mx-1' href={item.telegram} target='_blank' rel='noreferrer'>
              <img src='/assets/images/telegram.svg' className={classes.icon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolItem;
