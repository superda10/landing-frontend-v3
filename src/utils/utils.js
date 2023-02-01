import { DateTime } from 'luxon';

export const getMobileOperatingSystem = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return 'Windows Phone';
  }

  if (/android/i.test(userAgent)) {
    return 'Android';
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'iOS';
  }

  return 'unknown';
};

export const insertCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const getSPOList = [
  {
    code: 'pancakeswap',
    image: 'pancakeswap',
    url: 'https://pancakeswap.finance/swap?outputCurrency=0x8357c604c5533fa0053BeAaA1494Da552ceA38f7',
    contractName: 'BSC Contract',
    contractAdd: '0x8357c604c5533fa0053beaaa1494da552cea38f7',
  },
  {
    code: 'uniswap',
    image: 'uniswap',
    url: 'https://app.uniswap.org/#/swap?outputCurrency=0xcbE771323587EA16dACB6016e269D7F08A7ACC4E',
    contractName: 'ETH Contract',
    contractAdd: '0xcbE771323587EA16dACB6016e269D7F08A7ACC4E',
  },
  {
    code: 'gateio',
    image: 'gateio',
    url: 'https://www.gate.io/trade/SPO_USDT',
    contractName: 'ETH Contract',
    contractAdd: '0xcbE771323587EA16dACB6016e269D7F08A7ACC4E',
  },
];

export const shorten = (address = '', before = 6, after = 6, offNumber = 10) => {
  if (address.length <= offNumber) return address;
  return address.slice(0, before) + '...' + address.slice(address.length - after);
};

export const customizeCampaignData = (data) => {
  const newData = data?.items?.map((item) => {
    const startTime = data?.campaignTimes?.find(
      (time) => time?.campaign_id === item?.id && time?.type === 'Campaign time',
    )?.start_time;
    let realStatus = item?.status;
    if (realStatus === 2) {
      if (DateTime.fromISO(startTime ?? 0) < DateTime.now()) {
        realStatus = 2;
      } else {
        realStatus = 1;
      }
    }

    return {
      ...item,
      realStatus,
      startTime,
    };
  });
  return newData;
};
