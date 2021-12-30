import React, { useMemo } from 'react'
import Slider from 'react-slick'
import classes from './SliderComponent.module.scss'



const SliderComponent = ({data, slidesToShow = 1, slidesToScroll = 1, children}) => {
  const settings = useMemo(() => ({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: data?.length < slidesToShow ? data?.length : slidesToShow,
    slidesToScroll: data?.length < slidesToShow ? data?.length : slidesToScroll,
    autoPlay: false,
  }), [data]);

  return (
    <div className={classes.container}>
      {data && data.length > 0
        && <Slider {...settings}>
          { children }
        </Slider>
      }
    
    </div>
  )
}

export default SliderComponent
