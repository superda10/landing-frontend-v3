import { Box, Link, styled } from '@mui/material';
import React from 'react';
import { DateTime } from 'luxon';
import { DarkButton, PrimaryButton } from 'components/Common';

const CustomBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

const statusList = [
  { code: 0, text: 'Opening' },
  { code: 1, text: 'Upcoming' },
  { code: 2, text: 'Ended' },
];

const Title = ({ text }) => <div className='text-[#808793] text-sm'>{text}</div>;

const AirDrop = () => {
  const [airdrops, setAirdrops] = React.useState([]);

  React.useEffect(() => {
    const getAirDrops = async () => {
      try {
        const data = await fetch('/api/getAirDrops?t=' + Date.now()).then((res) => res.json());
        const finalData = data?.map((row) => {
          let status = statusList[1].code;
          const startTime = DateTime.fromISO(row?.start);
          const endTime = DateTime.fromISO(row?.end);
          if (DateTime.now() >= startTime && DateTime.now() < endTime) {
            status = statusList[0].code;
          } else if (DateTime.now() >= endTime) {
            status = statusList[2].code;
          }
          return { ...row, status };
        });
        setAirdrops(finalData);
      } catch (e) {
        console.log(e);
      }
    };

    getAirDrops();
  }, []);

  return (
    <div className='bg-[#191B1E] flex justify-center text-white min-h-screen'>
      <div className='max-w-[1120px] w-full py-12'>
        <img src='/assets/images/airdrop-banner.png' className='w-full rounded-2xl mb-20' />
        <div className='flex flex-col gap-3 mb-10'>
          <div className='font-bold text-3xl'>Participate In Our Exclusive Crypto Airdrops</div>
          <div className='text-[#B1B5C3] text-sm'>
            If your crypto project wants to be an airdrop partner,{' '}
            <Link href='/' className='text-[#FFD166] hover:text-[#f5e1af]'>
              click here
            </Link>
          </div>
        </div>
        <div className='flex flex-col gap-20'>
          {statusList.map((row, index) => {
            const list = airdrops?.filter((item) => item?.status === row.code) ?? [];

            return list.length > 0 ? (
              <div key={index} className='flex flex-col gap-6'>
                <div className='font-semibold text-3xl'>{row.text}</div>
                {list.map((drop, ind) => (
                  <div
                    key={ind}
                    className='p-4 bg-[#23252A] rounded-lg flex gap-8 items-center'
                    style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.35)' }}
                  >
                    <img src={drop?.image} className='rounded-lg w-[202px] h-[104px]' />
                    <div className='flex-1 grid grid-cols-4 gap-3'>
                      <div className='text-xl font-bold'>{drop?.title}</div>
                      <CustomBox>
                        <Title text='Reward' />
                        <div>{drop?.reward}</div>
                      </CustomBox>
                      <CustomBox>
                        <Title text='Duration' />
                        <div>
                          <div>{DateTime.fromISO(drop?.start ?? 0).toFormat('dd MMM - HH:mm')}</div>
                          <div>{DateTime.fromISO(drop?.end ?? 0).toFormat('dd MMM - HH:mm')}</div>
                        </div>
                      </CustomBox>
                      <CustomBox>
                        <Title text='Networks' />
                        <div>{drop?.network}</div>
                      </CustomBox>
                    </div>
                    <div className='w-[141px]'>
                      {row.code === 0 && (
                        <PrimaryButton className='w-full' onClick={() => window.open(drop?.join_url)}>
                          Join now
                        </PrimaryButton>
                      )}
                      {row.code === 2 && (
                        <DarkButton className='w-full' onClick={() => window.open(drop?.winner_url)}>
                          Winner list
                        </DarkButton>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default AirDrop;
