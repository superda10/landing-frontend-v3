import React from 'react';
import { Tooltip } from '@mui/material';
import { ContentCopyRounded } from '@mui/icons-material';
import { useRef } from 'react';

const Copiable = ({ text, textCopy }) => {
  const [isCopy, setIsCopy] = React.useState(false);
  const timer = useRef(null);

  const handleClickCopy = () => {
    clearTimeout(timer.current);
    try {
      navigator.clipboard.writeText(textCopy);
    } catch {
    } finally {
      setIsCopy(true);
      timer.current = setTimeout(() => {
        setIsCopy(false);
      }, 2000);
    }
  };

  return (
    <Tooltip title={isCopy ? 'Copied!' : 'Copy'} placement='top' onOpen={() => setIsCopy(false)}>
      <div onClick={handleClickCopy} className='cursor-pointer'>
        {text}
        <ContentCopyRounded fontSize='small' />
      </div>
    </Tooltip>
  );
};

export default Copiable;
