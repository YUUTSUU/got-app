import React from 'react';
import './errorMesage.css';
import img from './image.jpg';

const ErrorMessage = () => {
  return (
    <>
      <img src={img} alt='img'></img>
      <div className='error'>Something goes wrong</div>
    </>
  )
  
}

export default ErrorMessage;