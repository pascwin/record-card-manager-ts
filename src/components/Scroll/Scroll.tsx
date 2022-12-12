import React from 'react';

const Scroll = (props:any) => {
  return (
    <div style={{ overflow: 'scroll', height: '400px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;