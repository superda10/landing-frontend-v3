import React, { useState } from 'react'
import classNames from 'classnames'
import classes from './Incubator.module.scss'
import Partner from './Partner'
import SliderComponent from 'views/Home/components/SliderComponent'
import PartnerDetail from './PartnerDetail'

const partners = [{}]

const Incubator = () => {
  const [showDetail, setShowDetail] = useState(false)
  return (
    <div className={classes.container}>
      <h2 className='title text-center mb-20'>
        Spores Incubator
      </h2>
      <p className={classes.description}>
        <b>Spores Network</b> identifies, invests and empowers high quality, creator-centric Web2 game studios and bring them to Web3 by offering:
      </p>

      <div className={classes.services}>
        <div className={classes.service}>
          <h4 className={classes.title}>
            Publisher Support
          </h4>
          <ul className={classes.items}>
            <li>
              CMO (Brand activation, Community Development, Marketing)
            </li>
            <li>
              CFO (Financials, Fundraising, Tokenomics, Capital Table Building)
            </li>
          </ul>
        </div>
        <div className={classes.service}>
          <h4 className={classes.title}>
            Blockchain Service
          </h4>
          <ul className={classes.items}>
            <li>
              Blockchain technology solutions pre and post-IDO
            </li>
          </ul>
        </div>
      </div>

      <div className={classes.partners}>
        <SliderComponent data={partners}
          slidesToScroll={3}
          slidesToShow={3}
        >
          {partners.map((item, i) => (
            <div className={classNames(classes.partner, showDetail && classes.showDetail)}
              key={i}
            >
              <Partner partner={item} showDetail={showDetail} setShowDetail={setShowDetail}/>
            </div>
          ))}
        </SliderComponent>
        { showDetail
          && <div className={classes.detail}>
          <PartnerDetail setShowDetail={setShowDetail}/>
        </div>
        }
       
        
      </div>
    </div>
  )
}

export default Incubator
