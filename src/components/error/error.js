import React from 'react';
import img from './image.jpg';
import './error.css';

const Error = () => {
  return (
    <React.Fragment>
      <img src={img} alt='img'></img>
      <div className='error'>Something goes wrong</div>
    </React.Fragment>
  )
}

export default Error;