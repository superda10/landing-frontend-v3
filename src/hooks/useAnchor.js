import { useCallback, useState } from 'react';

const useAnchor = (init = null) => {
  const [anchorEl, setAnchorEl] = useState(init);
  const open = Boolean(anchorEl);

  const onOpen = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, [setAnchorEl]);

  const onClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  return [anchorEl, open, onOpen, onClose]
};

export default useAnchor;
