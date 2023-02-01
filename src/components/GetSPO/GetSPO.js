import React, { useCallback, useRef, useState } from 'react';
import { getSPOList, shorten } from 'utils/utils';
import { HoverLogo } from 'components/Common';
import Copiable from 'components/Copiable';

const GetSPO = () => {
  const [hoverItem, setHoverItem] = useState(null);
  const timerRef = useRef(null);

  const handleLeave = useCallback(() => {
    setHoverItem(null);
  }, []);

  return (
    <div>
      <div className='flex gap-4 justify-center mb-2'>
        {getSPOList.map((item, index) => (
          <div
            key={index}
            onMouseOver={() => {
              clearTimeout(timerRef.current);
              setHoverItem(item);
            }}
            onMouseLeave={() => {
              timerRef.current = setTimeout(handleLeave, 400);
            }}
            onClick={() => window.open(item.url, '_blank')}
          >
            <HoverLogo image={item.image} isButton />
          </div>
        ))}
      </div>
      <div
        className='text-[#667085] h-[20px] text-sm flex w-full justify-center gap-1'
        onMouseOver={() => clearTimeout(timerRef.current)}
        onMouseLeave={handleLeave}
      >
        {hoverItem && (
          <>
            <div>{hoverItem?.contractName}:</div>
            <Copiable text={shorten(hoverItem?.contractAdd)} textCopy={hoverItem?.contractAdd} />
          </>
        )}
      </div>
    </div>
  );
};

export default GetSPO;
