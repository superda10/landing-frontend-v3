import React, { useEffect, useState } from 'react'
import * as Api from 'api/api'
import Slider from "react-slick";
import classes from './Banners.module.scss'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000
};

const Banners = () => {
  const [banners, setBanners] = useState([])
  useEffect(() => {
    const getBanners = async () => {
      try {
        const result = await Api.get({
          url: '/banner/public/list'
        })

        setBanners(result.data)
      } catch(e) {
        console.log(e)
      }
    }

    getBanners()
  }, [])
  return (
    <div className={classes.container}>
      {banners && banners.length > 0
        && <Slider {...settings}>
          { banners.map((banner, i) => (
            <a key={i}
              href={banner.referencePath}
              target='_blank'
              rel="noreferrer"
            >
              <img src={banner.image} className={classes.img} alt='img'/>
            </a>
          )) }
        </Slider>
      }
     
    </div>
  )
}

export default Banners
