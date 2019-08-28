import React from 'react';

export default function Resizer(props) {
  return (
    <div 
      style={{ 
        position: 'absolute', 
        right: '-20px',
        bottom: '-20px',
        zIndex: '20',
        cursor: 'crosshair',
        border: '2px solid blue',
        width: '20px',
        height: '20px'
      }}
      onMouseDown = { () => props.onMouseDown(true) }
      onMouseUp = { () => props.onMouseUp(false) }
      onMouseMove = { e => props.onMouseMove(e) }
    >
      {/* <div>|</div>
      <div style={{
        transform: 'rotate(90deg)',
        position: 'absolute',
        right: '5px',
        bottom: '-5px'
      }}>|</div> */}
    </div>
  )
}