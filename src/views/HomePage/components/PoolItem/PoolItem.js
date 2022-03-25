import React from 'react'
import classNames from 'classnames'
import classes from './PoolItem.module.scss'

const PoolItem = ({item}) => {
  return (
    <div className={classes.container}>
      <div className={classNames(classes.content, classes.bb1)}>
        <div className='flex items-center mb-12'>
          <img src={item.logo} className={classNames(classes.logo, item.logoClass)} alt='logo'/>
          <div className='flex-1'>
            <h4 className={classes.name}>
              {item.poolName}
            </h4>
            <p className={classes.text}>
              {item.type}
            </p>
          </div>
        </div>

        <div className='flex mb-2 items-end justify-between'>
          <p className={classes.label}>
            Total Raise
          </p>
          <p className={classes.totalRaise}>
            {item.totalRaise}
          </p>
        </div>
        <div className='flex mb-2 items-start justify-between'>
          <p className={classes.label}>
            Start/End
          </p>
          <p className={classes.textRight}>
            {item.start} <br />
            {item.end}
          </p>
        </div>
        <div className='flex mb-2 items-end justify-between'>
          <p className={classes.label}>
            Price
          </p>
          <p className={classes.text}>
            {item.price}
          </p>
        </div>
      </div>

      

      <div className={classes.content}>
      { item.poolStatus === 'ENDED'
        && <>
        <div className='flex items-center justify-between'>
          { item.poolStatus === 'ENDED'
            ? <p className={classes.text}>
             Closed
              </p>
              : <p className={classes.text}>
              Registration ends: {item.registrationEnd}
            </p>
          }
          

          <p className={classes.text}>
            {item.percent}
          </p>
        </div>

        <div className={classes.progressWrapper}>
          <div className={classes.progress} style={{width: `${item.percent}`}}/>
        </div>

        <div className='flex items-center justify-between mb-26'>
          <p className={classes.text2}>
            {item.currentValue}
          </p>

          <p className={classes.text2}>
            {item.current} / {item.totalRaise}
          </p>
        </div>
        </>
      }

        <div className='flex items-center justify-between'>
          <a className='btn btn-main btn-small'
            href={item.learnMore}
            target='_blank'
            rel="noreferrer"
          >
            Learn more
          </a>

         <div className='flex items-center'>
           <a className='mx-1'
            href={item.website}
            target='_blank'
            rel="noreferrer"
           >
            <img src='/assets/images/globe.svg' className={classes.icon} />
           </a>
           <a className='mx-1'
            href={item.twitter}
            target='_blank'
            rel="noreferrer"
           >
             <img src='/assets/images/twitter.svg' className={classes.icon} />
           </a>
           <a className='mx-1'
            href={item.telegram}
            target='_blank'
            rel="noreferrer"
           >
             <img src='/assets/images/telegram.svg' className={classes.icon} />
           </a>
         </div>
        </div>
      </div>

    </div>
  )
}

export default PoolItem
