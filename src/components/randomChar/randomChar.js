import React from 'react';
import './randomChar.css';
import gotService from '../../services/gotService.js'

export default class RandomChar extends React.Component {
  constructor() {
    super(); 
    this.gotService = new gotService();
    this.state = {
      char: {}
    }
    this.updateChar();
    this.onCharLoaded = this.onCharLoaded.bind(this);
  }
    
  onCharLoaded() {
    this.setState(() => {
      return {
        char: this.state.char
      }
    })
  }

  updateChar() {
    const id = Math.floor(Math.random()*140 + 25);
    this.gotService.getCharacter(id)
      .then(this.onCharLoaded)
  }

  render() {
    const { char: {name, gender, born, died, culture} } = this.state;
    return (
      <div className="random-block rounded">
        <h4>Random Character: {name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender </span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born </span>
            <span>{born}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died </span>
            <span>{died}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture </span>
            <span>{culture}</span>
          </li>
        </ul>
      </div>
    );
  }
}
