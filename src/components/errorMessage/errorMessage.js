import React from 'react';
import './errorMesage.css';
import img from './image.jpg';

const ErrorMessage = () => {
  return (
    <>
      <img src={img} alt='img'></img>
      <span>Something goes wrong</span>
    </>
  )
  
}

export default ErrorMessage;