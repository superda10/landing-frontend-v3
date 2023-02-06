import { Circle, NavigateBefore, NavigateNext } from '@mui/icons-material';
import { IconButton, styled } from '@mui/material';
import React, { useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';
import { DateTime } from 'luxon';
import { customizeCampaignData } from 'utils/utils';

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
  & .swiper-slide {
    width: fit-content !important;
  }
`;

const statusList = [
  { code: 1, color: '#027A48', backgroundColor: '#ECFDF3', signalColor: '#12B76A', text: 'Upcoming' },
  { code: 2, color: '#B42318', backgroundColor: '#FEF3F2', signalColor: '#F04438', text: 'Live' },
  { code: 3, color: '#344054', backgroundColor: '#F2F4F7', signalColor: null, text: 'Sold out' },
];

const StatusTag = ({ status }) => {
  const statusInfo = statusList.find((item) => item.code === status);

  return (
    <div
      className='rounded-2xl px-2 py-1 flex gap-2 items-center w-fit'
      style={{ background: statusInfo?.backgroundColor, color: statusInfo?.color }}
    >
      {!!statusInfo?.signalColor && <Circle style={{ color: statusInfo.signalColor, fontSize: 6 }} />}
      <div className='text-xs'>{statusInfo?.text}</div>
    </div>
  );
};

const InfoLine = ({ title, value }) => (
  <div className='flex justify-between items-center'>
    <div>{title}</div>
    <div>{value}</div>
  </div>
);

const SporesLaunchpad = () => {
  const sliderRef = useRef(null);
  const [campaigns, setCampaigns] = React.useState({});

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  React.useEffect(() => {
    const getPools = async () => {
      try {
        const dataLive = await fetch('https://api-lp.spores.app/api/campaign?limit=100&status=Live').then((res) =>
          res.json(),
        );
        const dataFinished = await fetch('https://api-lp.spores.app/api/campaign?limit=10&status=Finished').then(
          (res) => res.json(),
        );
        setCampaigns([...customizeCampaignData(dataLive), ...customizeCampaignData(dataFinished)]);
      } catch (e) {
        console.log(e);
      }
    };

    getPools();
  }, []);

  return (
    <div className='bg-[#EAECF0] py-28 flex justify-center'>
      <div className='max-w-[1320px] flex flex-col gap-10  w-full'>
        <div className='flex justify-between'>
          <div className='max-w-[450px] font-bold text-5xl'>Launched on Spores Launchpad</div>
          <div className='flex gap-2 items-end'>
            <IconButton className='h-10 w-10 bg-[#F9FAFB]' onClick={handlePrev}>
              <NavigateBefore />
            </IconButton>
            <IconButton className='h-10 w-10 bg-[#F9FAFB]' onClick={handleNext}>
              <NavigateNext />
            </IconButton>
          </div>
        </div>
        {Object.keys(campaigns).length !== 0 && (
          <div>
            <CustomSwiper
              ref={sliderRef}
              slidesPerView='auto'
              spaceBetween={32}
              mousewheel
              keyboard
              loop
              modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
              autoplay={{ delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false }}
            >
              {campaigns?.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className='bg-white rounded-2xl w-[273px]'
                    style={{ boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)' }}
                  >
                    <div className='relative'>
                      <img src={item?.cover} className='w-full h-[195px] rounded-t-2xl' />
                      <img src='/assets/images/icons/icon-spores-safeguard.png' className='absolute top-0' />
                    </div>
                    <div>
                      <div className='p-4 flex gap-4' style={{ borderBottom: '1px solid #EAECF0' }}>
                        <img src={item?.avatar} className='w-[50px] h-[50px]' />
                        <div className='flex flex-col gap-1 w-full'>
                          <a
                            className='text-[#344054] font-semibold truncate w-[175px]'
                            style={{ textOverflow: 'ellipsis' }}
                          >
                            {item?.name}
                          </a>
                          <StatusTag status={item?.realStatus} />
                        </div>
                      </div>
                      <div className='flex flex-col gap-3 p-4 text-sm text-[#667085]'>
                        <InfoLine
                          title='Total raise'
                          value={
                            <div className='text-[#D9AC63] font-semibold'>{`$${Number(
                              item?.total_raise ? item?.total_raise : 0,
                            ).toLocaleString()}`}</div>
                          }
                        />
                        <InfoLine
                          title='Price'
                          value={<div>{`$${Number(item?.token_price ? item?.token_price : 0).toLocaleString()}`}</div>}
                        />
                        <InfoLine
                          title='Currency'
                          value={
                            <div className='flex gap-1'>
                              {item?.currencies?.map((currency, index) => (
                                <div key={index} className='rounded-2xl bg-[#F2F4F7] px-2 text-xs'>
                                  {currency}
                                </div>
                              ))}
                            </div>
                          }
                        />
                        <InfoLine
                          title='Starts'
                          value={
                            <div className='flex gap-1'>
                              {DateTime.fromISO(item?.startTime).toFormat('MMM dd, yyyy hh:mm a')}
                            </div>
                          }
                        />
                      </div>
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

export default SporesLaunchpad;
