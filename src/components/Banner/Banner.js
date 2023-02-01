import React from 'react';
import ReactPlayer from 'react-player';
import classes from './Banner.module.scss';
import GetSPO from 'components/GetSPO';
import { DarkButton, PrimaryButton } from 'components/Common';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';
import { styled } from '@mui/material';

const CustomSwiper = styled(Swiper)`
  -webkit-mask-image: linear-gradient(
    90deg,
    rgba(217, 217, 217, 0) 0%,
    #d9d9d9 10.94%,
    #d9d9d9 89.58%,
    rgba(217, 217, 217, 0) 100%
  );
  mask-image: linear-gradient(
    90deg,
    rgba(217, 217, 217, 0) 0%,
    #d9d9d9 10.94%,
    #d9d9d9 89.58%,
    rgba(217, 217, 217, 0) 100%
  );
  padding: 5px 0px !important;
  & .swiper-wrapper {
    transition-timing-function: linear;
  }
  & .swiper-slide {
    width: fit-content !important;
  }
`;

const Banner = ({ pools }) => {
  return (
    <div className='flex flex-col items-center bg-[#F2F1FB] pt-28'>
      <div className='max-w-[948px] text-center'>
        <div className='text-[#1D2939] font-bold text-6xl mb-8'>Web3. Gaming. Metaverse Publisher & Launchpad</div>
        <div className='text-[#667085] text-xl mb-[52px]'>
          Spores Network is the leading multi-chain launchpad for IDOs and INOs of up-and-coming high quality web3
          projects, in which user can seamlessly participate & support the project!
        </div>
        <div className='flex gap-4 justify-center mb-8'>
          <PrimaryButton
            className={classes.customButton}
            onClick={() => window.open('https://launchpad.spores.app/', '_blank')}
          >
            Launchpad
          </PrimaryButton>
          <DarkButton
            className={classes.customButton}
            onClick={() => window.open('https://staking.spores.app/', '_blank')}
          >
            Stake SPO
          </DarkButton>
          <DarkButton
            className={classes.customButton}
            onClick={() =>
              window.open(
                'https://docs.google.com/forms/d/1K_GPDM6RmYbz60GWyEy9IKXUyEGBrRqlTnmqU8Gd1cw/viewform?edit_requested=true#settings',
                '_blank',
              )
            }
          >
            Apply IDO
          </DarkButton>
        </div>
        <div className=''>
          <GetSPO />
        </div>
        {/* <a className='' href='https://bridge.spores.app/spores' target='_blank' rel='noreferrer'>
          Token Bridge
        </a> */}
      </div>
      <div className='max-w-[1660px] relative'>
        <ReactPlayer
          // url='https://republique-assets-storage.s3.ap-southeast-1.amazonaws.com/video.mp4'
          url='/assets/video/spores.mp4'
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
        {Object.keys(pools).length !== 0 && (
          <div
            className='absolute bottom-20 max-w-[1320px] left-1/2'
            style={{
              transform: 'translateX(-50%)',
            }}
          >
            <CustomSwiper
              slidesPerView='auto'
              spaceBetween={20}
              mousewheel
              keyboard
              loop
              modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
              autoplay={{ delay: 0, pauseOnMouseEnter: true, disableOnInteraction: false }}
              speed={3000}
            >
              {pools?.all
                ?.filter((pool) => !!pool.multipleTimes && pool.multipleTimes !== '0')
                ?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className='flex gap-4 px-4 py-2 rounded-2xl bg-white'
                      style={{ boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)' }}
                    >
                      <div className='flex justify-center items-center' style={{ height: 52, width: 52 }}>
                        <img src={item.logo} />
                      </div>
                      <div className='flex flex-col gap-1'>
                        <div className='font-semibold text-[#344054]'>{item.name}</div>
                        <div className='text-sm font-medium text-[#039855]'>{item.multipleTimes ?? 1}x</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </CustomSwiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
