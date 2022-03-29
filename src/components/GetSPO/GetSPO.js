import React from 'react'
import classNames from 'classnames'
import classes from './GetSPO.module.scss'

const GetSPO = () => {
  return (
    <div className={classes.container}>
      <p className={classes.label}>
        Get $SPO
      </p>
      <a className={classNames(classes.btn)}
        href='https://app.uniswap.org/#/swap?outputCurrency=0xcbE771323587EA16dACB6016e269D7F08A7ACC4E'
        target='_blank'
        rel="noreferrer"
      >
        <img src='/assets/images/getspo/uniswap.png' className={classes.uniswap}/>
      </a>
      <a className={classNames(classes.btn)}
        href='https://pancakeswap.finance/swap?outputCurrency=0x8357c604c5533fa0053BeAaA1494Da552ceA38f7'
        target='_blank'
        rel="noreferrer"
      >
        <img src='/assets/images/getspo/pancakeswap.png' className={classes.pancakeswap} />
      </a>
      <a className={classNames(classes.btn)}
        href='https://www.gate.io/trade/SPO_USDT'
        target='_blank'
        rel="noreferrer"
      >
        <img src='/assets/images/getspo/gateio.png' className={classes.gateio} />
      </a>
      <div className={classes.links}>
        <a className={classes.link}
          href='https://etherscan.io/token/0xcbE771323587EA16dACB6016e269D7F08A7ACC4E'
          target='_blank'
          rel="noreferrer"
        >
          ETH Contract: 0xcbE7713235...F08A7ACC4E
        </a>
        <a className={classes.link}
          href='https://bscscan.com/token/0x8357c604c5533fa0053beaaa1494da552cea38f7'
          target='_blank'
          rel="noreferrer"
        >
          BSC Contract: 0x8357c604c5...552cea38f7
        </a>
      </div>
    </div>
  )
}

export default GetSPO
