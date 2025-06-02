import React from 'react';
import './MovingDot.css';

export default function MovingDot({ x, y }) {
  return (
    <div
      className="semana4-moving-dot"
      style={{
        transform: `translate(${x}px, ${y}px)`
      }}
    />
  );
}