import { useEffect } from "react";

import Router from 'next/router'

const Explore = () => {
  useEffect(() => {
    Router.push('/')
  }, [])
  return (
    <div />
  );
};

export default Explore;
