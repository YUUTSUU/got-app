import React from 'react';

export default class Field extends React.Component {
  render() {
    const {detail, field, label} = this.props;
    return (
      <React.Fragment>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">{label}</span>
          <span>{detail[field]}</span> 
        </li>
      </React.Fragment>
    )
  }
}

