import React from 'react';

const Field = ({detail, field, label}) => { //в аргумент функционального компонента принимается props из компонента detail 
  return (
    <React.Fragment>
      <li className="list-group-item d-flex justify-content-between">
        <span className="term">{label}</span>
        <span>{detail[field]}</span> 
      </li>
    </React.Fragment>
  )
}

export default Field;