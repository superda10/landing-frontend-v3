import { IconButton, styled } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';
import { useRef } from 'react';
import { useCallback } from 'react';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

const CustomSwiper = styled(Swiper)`
  padding: 5px 0px !important;
`;

const teamList = [
  {
    name: 'ERIC HUNG NGUYEN',
    image: require('assets/images/teams/Eric_Hung_Nguyen.png').default.src,
    position: 'CEO',
    description: (
      <div>
        BSc. London School of Economics Msc. Imperial College London., Finance
        <br />
        <br />
        Experience: Senior investment analyst of Elliott Management with over $35bn assets under management. Investment
        Analyst at Nomura International.
      </div>
    ),
    Twitter: 'https://twitter.com/eric_hungnguyen',
    LinkedIn: 'https://www.linkedin.com/in/hungngocnguyen',
  },
  {
    name: 'DUC LUU',
    image: require('assets/images/teams/Duc_Luu.png').default.src,
    position: 'CHAIRMAN',
    description: (
      <div>
        BA: Yale University MBA: University of Chicago Booth School of Business
        <br />
        <br />
        Experience: Senior investment analyst of Elliott Management with over $35bn assets under management. Investment
        Analyst at Nomura International.
      </div>
    ),
    Twitter: 'https://twitter.com/askduc',
    LinkedIn: 'https://www.linkedin.com/in/duc-luu',
  },
  {
    name: 'PHUNG MINH',
    image: require('assets/images/teams/phung-minh.png').default.src,
    position: 'Engineering Director',
    Twitter: '',
    LinkedIn: '',
    description: (
      <div>
        Engineering Director at Spores An e-commerce expert with 17+ years of experience across multiple fields and
        start-ups. An passionate advocate for blockchain and its applications.
      </div>
    ),
  },
  {
    name: 'Roger Lim',
    image: require('assets/images/teams/roger-lim.png').default.src,
    position: 'Advisor',
    Twitter: '',
    LinkedIn: '',
    description: (
      <div>
        Founding partner of NGC Ventures, one of the largest institutional investors of blockchain and distributed
        ledger technologies and has been a key contributor to a number of leading blockchain projects
      </div>
    ),
  },
  {
    name: 'Dennis Chookaszian',
    image: require('assets/images/teams/dennis-chookaszian.png').default.src,
    position: 'Advisor, Governance',
    Twitter: 'https://twitter.com/chookasd',
    LinkedIn: 'https://www.linkedin.com/in/dennis-chookaszian/',
    description: (
      <div>
        Former Chairman and CEO of CNA Insurance Companies, which was a $17 Billion multi line insurer with 20,000
        employees
        <br />
        <br />
        Former Board Director at 13 publicly-traded corporations
      </div>
    ),
  },
  {
    name: 'Rishad Tobaccowala',
    image: require('assets/images/teams/rishad-tobaccowala.png').default.src,
    position: 'Advisor, Spores Network',
    Twitter: 'https://twitter.com/rishad',
    LinkedIn: 'https://www.linkedin.com/in/rishadtobaccowala/',
    description: (
      <div>
        Author of Restoring the Soul of Business: Staying Human in the Age of Data
        <br />
        <br />
        An advertising titan with 35+ years of experience with Publicis Groupe
      </div>
    ),
  },
  {
    name: 'Tho Tran',
    image: require('assets/images/teams/tho-tran.png').default.src,
    position: 'Advisor',
    Twitter: '',
    LinkedIn: '',
    description: (
      <div>
        Founder of Sonat Game
        <br />
        <br />
        8+ years of experience in game development, responsible for some of the most played and downloaded games in
        Japanese, Korean, and European Markets
      </div>
    ),
  },
];
const Team = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className='bg-[#EAECF0] py-28 flex justify-center'>
      <div className='flex flex-col items-center max-w-[1320px] gap-10'>
        <div className='text-center font-bold text-5xl text-[#344054]'>Team & Advisors</div>

        <div className='relative w-full'>
          <IconButton
            className='h-10 w-10 bg-[#F9FAFB] absolute top-1/2 -translate-y-1/2 -left-14'
            onClick={handlePrev}
          >
            <NavigateBefore />
          </IconButton>
          <IconButton
            className='h-10 w-10 bg-[#F9FAFB] absolute top-1/2 -translate-y-1/2 -right-14'
            onClick={handleNext}
          >
            <NavigateNext />
          </IconButton>
          <CustomSwiper
            ref={sliderRef}
            slidesPerView={3}
            spaceBetween={40}
            mousewheel
            keyboard
            loop
            modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
            autoplay={{ delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }}
          >
            {teamList.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className='bg-white rounded-2xl px-6 py-10 flex flex-col items-center min-h-[500px]'
                  style={{ boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)' }}
                >
                  <img src={item.image} className='w-[200px] h-[200px] mb-4' />
                  <div className='text-2xl font-semibold text-[#344054] mb-1'>{item.name}</div>
                  <div className='text-[#D9AC63] text-lg font-semibold mb-4'>{item.position}</div>
                  <div className='text-[#667085] text-sm text-center'>{item.description}</div>
                  <div className='flex-1 flex items-end gap-2.5'>
                    {!!item.Twitter && (
                      <a href={item.Twitter} target='_blank' rel='noreferrer'>
                        <img src='/assets/images/socials/twitter.svg' className='w-8 h-8' alt='icon' />
                      </a>
                    )}
                    {!!item.LinkedIn && (
                      <a href={item.LinkedIn} target='_blank' rel='noreferrer'>
                        <img src='/assets/images/socials/linkedin.svg' className='w-8 h-8' alt='icon' />
                      </a>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </div>
      </div>
    </div>
  );
};

export default Team;
