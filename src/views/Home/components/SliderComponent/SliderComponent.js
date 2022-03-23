import React, { useMemo } from 'react'
import Slider from 'react-slick'
import classNames from 'classnames'
import classes from './SliderComponent.module.scss'

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


const SliderComponent = ({data, slidesToShow = 1, slidesToScroll = 1, children}) => {
  const settings = useMemo(() => ({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: data?.length < slidesToShow ? data?.length : slidesToShow,
    slidesToScroll: data?.length < slidesToShow ? data?.length : slidesToScroll,
    autoPlay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: data?.length < slidesToShow ? data?.length : 2,
          slidesToScroll: data?.length < slidesToShow ? data?.length : 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
    ]
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
