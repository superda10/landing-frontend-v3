import React from 'react';
import classNames from 'classnames';
import ReactPlayer from 'react-player';
import classes from './Banner.module.scss';
import GetSPO from 'components/GetSPO';

const Banner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.videoWrapper}>
        <ReactPlayer
          url='https://republique-assets-storage.s3.ap-southeast-1.amazonaws.com/video.mp4'
          className={classes.reactPlayer}
          playing={true}
          width='100%'
          height='100%'
          controls={false}
          // light='/assets/images/video-thumb.png'
          loop={true}
          muted={true}
          autoPlay={true}
          playsinline={true}
          playsInline={true}
        />
      </div>
      {/* <img src='/assets/images/large-logo.png' className={classes.largeLogo} alt='logo'/> */}
      <div className={classes.content}>
        <h2 className={classes.title}>GameFi. Metaverse. Launchpad and Publisher</h2>
        <div className={classNames('flex items-center justify-center xs:flex-col', classes.actions)}>
          <a className='btn btn-main mx-8' href='https://launchpad.spores.app/' target='_blank' rel='noreferrer'>
            <img src='/assets/images/go-to-launchpad.svg' className={classes.btnIcon} />
            Go To Launchpad
          </a>
          <a className='btn btn-main mx-8' href='https://staking.spores.app/' target='_blank' rel='noreferrer'>
            <img src='/assets/images/stake-spo.svg' className={classes.btnIcon} />
            Stake SPO
          </a>
          <a
            className='btn btn-main mx-8'
            href='https://docs.google.com/forms/d/1K_GPDM6RmYbz60GWyEy9IKXUyEGBrRqlTnmqU8Gd1cw/viewform?edit_requested=true#settings'
            target='_blank'
            rel='noreferrer'
          >
            <img src='/assets/images/apply-to-launch.svg' className={classes.btnIcon} />
            Apply To Launch
          </a>
        </div>
        <div className={classes.getspo}>
          <GetSPO />
        </div>
        <a
          className={classNames('btn btn-black px-3', classes.btnMini)}
          href='https://bridge.spores.app/spores'
          target='_blank'
          rel='noreferrer'
        >
          Token Bridge
        </a>
      </div>
    </div>
  );
};

export default Banner;
