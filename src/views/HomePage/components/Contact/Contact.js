import { LightButton } from 'components/Common';
import React from 'react';

const itemList = [
  {
    background: '/assets/images/background-contact.png',
    title: 'Apply for Incubation',
    content: (
      <div>
        Spores Network identifies, invests and empowers high quality, creator-centric Web2 game studios and bring them
        to Web3 by offering:
      </div>
    ),
    subContent: (
      <div className='flex flex-col gap-2 text-lg font-semibold text-white'>
        <div className='flex gap-3 items-center'>
          <img src='/assets/images/icons/icon-handshake.png' className='h-10 w-10' />
          Publisher Support
        </div>
        <div className='flex gap-3 items-center'>
          <img src='/assets/images/icons/icon-blockchain-service.png' className='h-10 w-10' />
          Blockchain Service
        </div>
      </div>
    ),
    button: <LightButton>Contact Us</LightButton>,
  },
  {
    background: '/assets/images/background-apply.png',
    title: (
      <div>
        Join our
        <br /> Influencers Network
      </div>
    ),
    content: <div>Are you a Crypto Influencer or KOL? We would love to meet and work with you!</div>,
    subContent: null,
    button: <LightButton>Apply Now</LightButton>,
  },
];

const Contact = () => {
  return (
    <div className='bg-white py-28 flex justify-center'>
      <div className='max-w-[1320px] w-full grid grid-cols-2 gap-10'>
        {itemList.map((item, index) => (
          <div
            key={index}
            className='p-10 flex flex-col gap-6 min-h-[400px]'
            style={{ background: `url(${item.background}) no-repeat center/100% 100%` }}
          >
            <div className='text-white font-bold text-4xl max-w-[392px]'>{item.title}</div>
            <div className='text-[#F9FAFB] max-w-[392px]'>{item.content}</div>
            {item.subContent}
            <div className='flex-1 flex items-end'>{item.button}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
