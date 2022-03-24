import React from 'react'
import classNames from 'classnames'
import ReactPlayer from 'react-player'
import classes from './Banner.module.scss'
import GetSPO from 'components/GetSPO'

const Banner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.videoWrapper}>
          <ReactPlayer
            url="https://republique-assets-storage.s3.ap-southeast-1.amazonaws.com/video.mp4"
            className={classes.reactPlayer}
            playing={true}
            width="100%"
            height="100%"
            controls={false}
            // light='/assets/images/video-thumb.png'
            loop={true}
            muted={true}
            autoPlay={true}
          />
        </div>
      {/* <img src='/assets/images/large-logo.png' className={classes.largeLogo} alt='logo'/> */}
      <div className={classes.content}>
      <h2 className={classes.title}>
        GameFi. Metaverse.
        Launchpad and Publisher
      </h2>
      <div className={classNames('flex items-center justify-center xs:flex-col', classes.actions)}>
        <a className='btn btn-main mx-8'
          href='https://docs.google.com/forms/d/1K_GPDM6RmYbz60GWyEy9IKXUyEGBrRqlTnmqU8Gd1cw/viewform?edit_requested=true#settings'
          target='_blank'
          rel="noreferrer"
        >
          <img src='/assets/images/apply-to-launch.svg' className={classes.btnIcon} />
          Apply To Launch
        </a>
        <a className={classNames('btn btn-black mx-8', classes.btn)}
          href='https://spores-network.gitbook.io/spores-network-white-paper-2.0/'
          target='_blank'
          rel="noreferrer"
        >
          <div className={classes.whitepapger} />
          Whitepaper
        </a>
      </div>
      <div className={classes.getspo}>
        <GetSPO />
      </div>
      </div>
    </div>
  )
}

export default Banner
