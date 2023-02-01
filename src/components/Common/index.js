import { Button, styled } from '@mui/material';
import { useState } from 'react';

export const DarkButton = styled(Button)`
  font-weight: 600;
  color: #fff;
  background: #344054;
  border: 1px solid #344054;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  :hover {
    background: #1d2939;
    border: 1px solid #1d2939;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  }
  :focus {
    background: #475467;
    border: 1px solid #475467;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #d0d5dd;
  }
  &.Mui-disabled {
    background: #d0d5dd;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  }
`;

export const PrimaryButton = styled(Button)`
  font-weight: 600;
  color: #fff;
  background: #d9ac63;
  border: 1px solid #d9ac63;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  :hover {
    background: #aa834c;
    border: 1px solid #aa834c;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  }
  :focus {
    background: #d9ac63;
    border: 1px solid #d9ac63;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #efe8d7;
  }
  &.Mui-disabled {
    background: #ecd9b4;
    border: 1px solid #ecd9b4;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  }
`;

export const LightButton = styled(Button)`
  font-weight: 600;
  color: #344054;
  background: #fff;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  :hover {
    background: #f9fafb;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    color: #1d2939;
  }
  :focus {
    background: #ffffff;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f2f4f7;
  }
  &.Mui-disabled {
    background: #ffffff;
    border: 1px solid #eaecf0;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    color: #d0d5dd;
  }
`;

export const HoverLogo = ({ image, isButton }) => {
  const [realImage, setRealImage] = useState(`${image}-default`);

  return (
    <div
      className={`cursor-pointer w-fit ${isButton ? 'px-4 py-2 hover:bg-[#0000001A] rounded-[100px]' : ''}`}
      onMouseEnter={() => setRealImage(image)}
      onMouseLeave={() => setRealImage(`${image}-default`)}
    >
      <img src={`/assets/images/icons/icon-${realImage}.png`} />
    </div>
  );
};
