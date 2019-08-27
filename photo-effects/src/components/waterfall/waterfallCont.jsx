import React from 'react';
import Photolist from './Photolist';
import './waterfall.css';

const waterfallCont = () => {
  return (
    <div className="waterfallcont">
      <Photolist />
      <Photolist />
      <Photolist />
      <Photolist />
    </div>
  );
};

export default waterfallCont;
