import React, { useState } from 'react';
import { Link } from '@mui/material';
import { getSPOList, shorten } from 'utils/utils';
import { HoverLogo } from 'components/Common';

const helpList = [
  { text: 'FAQs', url: '' },
  { text: 'Apply to Launch', url: '' },
  { text: 'About', url: '' },
  { text: 'Docs', url: '' },
  { text: 'News', url: '' },
  { text: 'Contact us', url: '' },
];

const productList = [
  { text: 'Launchpad', url: 'https://launchpad.spores.app' },
  { text: 'Staking', url: '' },
  { text: 'Earning', url: 'https://staking-v1.spores.app/' },
  { text: 'Marketplace', url: 'https://marketplace.spores.app' },
  { text: 'République', url: 'https://republique.spores.app/' },
  { text: 'Gamestore', url: 'https://games.spores.app' },
];

const contractList = [
  {
    text: 'Ethereum Contract',
    address: '0xcbE771323587EA16dACB6016e269D7F08A7ACC4E',
    url: 'https://etherscan.io/token/0xcbE771323587EA16dACB6016e269D7F08A7ACC4E',
  },
  {
    text: 'BSC Contract',
    address: '0x8357c604c5533fa0053beaaa1494da552cea38f7',
    url: 'https://bscscan.com/token/0x8357c604c5533fa0053beaaa1494da552cea38f7',
  },
];

const mediaList = [
  { image: 'medium', url: 'https://spores.medium.com/' },
  { image: 'instagram', url: 'https://instagram.com/SporesNetwork' },
  { image: 'discord', url: 'https://discord.gg/mCTU9kx6' },
  { image: 'facebook', url: 'https://facebook.com/SporesNetwork' },
  { image: 'telegram', url: 'https://t.me/SporesOfficial' },
  { image: 'twitter', url: 'https://twitter.com/Spores_Network' },
  { image: 'linkedin', url: 'https://linkedin.com/company/SporesNetwork' },
];

const HoverLogoMedia = ({ image }) => {
  const [color, setColor] = useState('#667085');

  return (
    <div
      className='cursor-pointer w-fit'
      onMouseEnter={() => setColor('#FFE89E')}
      onMouseLeave={() => setColor('#667085')}
    >
      <i
        className={`block w-6 h-6`}
        style={{
          WebkitMaskImage: `url(/assets/images/socials/${image}.png)`,
          WebkitMaskSize: '100%',
          background: color,
        }}
      />
    </div>
  );
};

const Title = ({ text }) => <div className='text-[#344054] text-xl font-semibold mb-7'>{text}</div>;

const CustomText = ({ text }) => <div className='text-[#667085] hover:text-[#EECE7C]'>{text}</div>;

const Footer = () => {
  return (
    <div className='py-10 bg-white flex justify-center' style={{ borderTop: '1px solid #EAECF0' }}>
      <div className='max-w-[1320px] w-full text-[#667085]'>
        <div className='grid grid-cols-6 gap-10 pb-8 mb-8' style={{ borderBottom: '1px solid #EAECF0' }}>
          <div className='col-span-2' style={{ borderRight: '1px solid #EAECF0' }}>
            <img src='/assets/logos/logo_primary.svg' className='h-10 mb-[18px]' alt='logo' />
            <div className='pr-10'>
              Spores Network is the leading multi-chain launchpad for IDOs and INOs of up-and-coming high quality web3
              projects, in which user can seamlessly participate & support the project!
            </div>
          </div>
          <div>
            <Title text='Product' />
            <div className='flex flex-col gap-2'>
              {productList.map((item, index) => (
                <div key={index} className='flex'>
                  <Link href={item.url} target='_blank'>
                    <CustomText text={item.text} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Title text='Token' />
            <div className='flex flex-col gap-4'>
              {getSPOList.map((item, index) => (
                <div key={index} className='flex'>
                  <Link href={item.url} target='_blank'>
                    <HoverLogo image={item.image} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Title text='Help Center' />
            <div className='flex flex-col gap-2'>
              {helpList.map((item, index) => (
                <div key={index} className='flex'>
                  <Link href={item.url} target='_blank'>
                    <CustomText text={item.text} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Title text='Contact' />
            <div className='grid grid-cols-4 gap-6 max-w-[168px]'>
              {mediaList.map((item, index) => (
                <div key={index}>
                  <Link href={item.url} target='_blank'>
                    <HoverLogoMedia image={item.image} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='text-sm break-words flex gap-10'>
          {contractList.map((item, index) => (
            <div key={index}>
              <Link href={item.url} target='_blank'>
                <CustomText text={`${item.text}: ${shorten(item.address)}`} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
