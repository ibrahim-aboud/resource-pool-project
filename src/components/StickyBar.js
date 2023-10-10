// components/OpacityControlledDiv.js
import React from 'react';
import style from '@/styles/StickyBar.module.css'
const StickyBar = ({ opacityValue ,text}) => {
  const divStyle = {
    opacity: opacityValue,
    transition: 'opacity 0.3s ease', // Add a transition for a smooth change in opacity
  };

  return (
    <div style={divStyle} className={style.sticky}>
      {text}
    </div>
  );
};

export default StickyBar;