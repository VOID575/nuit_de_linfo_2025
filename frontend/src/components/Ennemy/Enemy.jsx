import React from 'react';
import './Enemy.css';

const Enemy = ({ x, y, w, h }) => {
  // increase visual size by 2x and shift to keep centered on the original (x,y)
  const newW = w * 2;
  const newH = h * 2;
  const offsetX = (newW - w) / 2; // shift left
  const offsetY = (newH - h) / 2; // shift up

  const style = {
    position: 'absolute',
    left: x - offsetX,
    top: y - offsetY,
    width: newW,
    height: newH,
    display: 'block',
    pointerEvents: 'none',
  };
  return (
    <div className="enemy" style={style}>
      <div className="enemy-eye left" />
      <div className="enemy-eye right" />
    </div>
  );
};

export default Enemy;
