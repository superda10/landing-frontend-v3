import React from 'react'
import Slider from "react-slick";
import ReactPlayer from 'react-player'
import classes from './Marketplace.module.scss'
import classNames from 'classnames'

const VR_IMAGES = [{
  image: '/assets/images/vr-images/1.png',
  id: 1
}, {
  image: '/assets/images/vr-images/2.png',
  id: 2
}, {
  image: '/assets/images/vr-images/3.png',
  id: 3
}, {
  image: '/assets/images/vr-images/4.png',
  id: 4
}, {
  image: '/assets/images/vr-images/5.png',
  id: 5
}]

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 5000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};


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

const Marketplace = () => {
  return (
    <div className={classes.container}>
      <img src='/assets/images/marketplace.png' className={classes.img} />
      <div className='flex justify-center'>
        <a className='btn btn-black mb-100 center'
          href='https://marketplace.spores.app/'
          target='_blank'
          rel="noreferrer"
        >
          <img src='/assets/images/marketplace.svg' className={classes.icon} />
          Marketplace
        </a>
      </div>
     

      <img src='/assets/images/gamestore.png' className={classNames(classes.img, classes.mb24)} />
      <div className='flex justify-center'>
        <a className='btn btn-black mb-100 center'
          href='https://games.spores.app/'
          target='_blank'
          rel="noreferrer"
        >
          <img src='/assets/images/game.svg' className={classes.icon} />
          Games Store
        </a>
      </div>
      

      <h3 className={classNames('title text-center mb-20', classes.title)}>
        MUSEUM. RETAIL SPACE. SCULPTURE PARQUE
      </h3>

      <Slider {...settings}>
        <div className={classes.videoWrapper}>
          <ReactPlayer
            url="https://republique-assets-storage.s3.ap-southeast-1.amazonaws.com/Republique_21_9.mp4"
            className={classes.reactPlayer}
            playing={true}
            width="100%"
            height="100%"
            controls={false}
            // light='/assets/images/video-thumb.png'
            loop={true}
            muted={true}
            autoPlay={true}
            playsinline={true}
            playsInline={true}
          />
        </div>
          { VR_IMAGES.map((item, i) => (
            <div key={i}>
              <img src={item.image} className={classes.imageVr} alt='img'/>
            </div>
          )) }
        </Slider>
      <div className='flex justify-center mt26'>
        <a className='btn btn-black mb-100 center'
          href='http://republique.spores.app/'
          target='_blank'
          rel="noreferrer"
        >
          <img src='/assets/images/galery.svg' className={classes.icon} />
          Gallery
        </a>
      </div>
      
    </div>
  )
}

export default Marketplace
