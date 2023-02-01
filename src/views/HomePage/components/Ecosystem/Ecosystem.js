import { Box, styled } from '@mui/material';
import { DarkButton } from 'components/Common';
import React from 'react';

const CustomBox = styled(Box)`
  background: linear-gradient(97.18deg, #d6d6e1 1.65%, #f8f8fb 50.21%, #d6d6e0 90.66%);
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
  border-radius: 16px;
  padding: 32px;
  width: 100%;
  height: 100%;
  position: relative;
`;

const incubationList = [
  {
    icon: 'icon-finance',
    title: 'Finance & Fundraising',
    content: 'Strategic financial and tokenomics consultation to jumpstart project funding',
  },
  {
    icon: 'icon-speaker',
    title: 'Marketing & Community Building',
    content: 'End-to-End marketing solutions for sustainable development',
  },
  { icon: 'icon-blockchain', title: 'Blockchain Development', content: 'Product, engineering, smart contract design.' },
  {
    icon: 'icon-partnership',
    title: 'Partnership',
    content: 'Connect startups with industry experts to define target markets and plan product roadmaps',
  },
];

const BlockInfo = ({ icon, title, content }) => (
  <div className='flex flex-col items-center gap-4 text-center'>
    <div className='bg-white border-[#EAECF0] border-[1px] rounded-full w-[120px] h-[120px] flex justify-center items-center'>
      <img src={`/assets/images/icons/${icon}.png`} />
    </div>
    <div className='font-bold text-[30px] text-[#344054] max-w-[350px]'>{title}</div>
    <div className='text-[#667085] max-w-[540px]'>{content}</div>
  </div>
);

const Ecosystem = () => {
  return (
    <div className='bg-white py-28 flex justify-center'>
      <div className='flex flex-col items-center max-w-[1320px] gap-10'>
        <div className='max-w-[548px] text-center font-bold text-5xl text-[#344054]'>Spores Network Ecosystem</div>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <CustomBox>
              <BlockInfo
                icon='icon-rocket'
                title='Launchpad'
                content='Offers access to high value projects at early-stage pricing.
Reached to 20K+ strong hands investors'
              />
              <img src='/assets/images/spores-top-right.png' className='absolute bottom-0 left-0' />
            </CustomBox>
          </div>
          <div>
            <CustomBox>
              <BlockInfo
                icon='icon-metaverse'
                title='Web3. Gaming. Metaverse. Publisher'
                content='Effortlessly design and build your gamefi & metaverse with our ready-made SDK solution.'
              />
              <img src='/assets/images/spores-top-left.png' className='absolute bottom-0 right-0' />
            </CustomBox>
          </div>
          <div className='col-span-2'>
            <CustomBox>
              <div className='font-bold text-[30px] text-[#344054] text-center mb-10'>Spores Incubation</div>
              <div className='grid grid-cols-4 gap-3'>
                {incubationList.map((item, index) => (
                  <BlockInfo key={index} icon={item.icon} title={item.title} content={item.content} />
                ))}
              </div>
              <img src='/assets/images/spores-bottom-left.png' className='absolute top-0 right-0' />
              <img src='/assets/images/spores-bottom-right.png' className='absolute top-0 left-0' />
            </CustomBox>
          </div>
        </div>
        <DarkButton
          className='font-semibold px-7 py-4'
          onClick={() =>
            window.open(
              //TODO: add url
              '',
              '_blank',
            )
          }
        >
          Apply Incubation
        </DarkButton>
      </div>
    </div>
  );
};

export default Ecosystem;
