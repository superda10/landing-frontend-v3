import React, { useEffect, useState, useMemo } from 'react'
import * as Api from 'api/api'
import Slider from "react-slick";
import classNames from 'classnames'
import classes from './Banners.module.scss'
import { getMobileOperatingSystem } from 'utils/utils';

export function SampleNextArrow(props) {
  const { onClick, currentSlide, slideCount } = props;
  return (
    <div
      onClick={onClick}
      className={classNames(classes.arrow, classes.nextArrow, currentSlide + 4 === slideCount && classes.disabled)}
    >
      <img src={'/assets/images/prev-black.svg'} className={classes.arrowIcon} alt="arrow" />
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { onClick, currentSlide } = props;
  return (
    <div
      onClick={onClick}
      className={classNames(classes.arrow, classes.prevArrow, currentSlide === 0 && classes.disabled)}
    >
      <img src={'/assets/images/prev-black.svg'} className={classes.arrowIcon} alt="arrow" />
    </div>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const Banners = () => {
  const [banners, setBanners] = useState([])
  const [ isMobile, setIsMobile ] = useState(false)
  useEffect(() => {
    setIsMobile(getMobileOperatingSystem() !== 'unknown')
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
              {/* <div style={{
                backgroundImage: `url("${banner.image}")`
              }}
              className={classes.imageWrapper}/> */}
              <img src={isMobile ? banner.imageMobile : banner.image} className={classes.img} alt='img'/>
            </a>
          )) }
        </Slider>
      }
     
    </div>
  )
}

export default Banners
