import React from 'react';
import './randomChar.css';
import gotService from '../../services/gotService.js'
import Spinner from '../spinner/spinner.js';
import ErrorMessage from '../errorMessage/errorMessage.js'

export default class RandomChar extends React.Component {

  gotService = new gotService();

  state = {
    char: {},
    loading: true,
    error: false
  }
    
  componentDidMount() {
    this.updateChar();
    this.timerId = setInterval(this.updateChar, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  onCharLoaded = (char) => {
    this.setState({
      char,
      loading: false
    });
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updateChar = () => {
    const id = Math.floor(Math.random()*140 + 25);
    this.gotService.getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError)
  }

  render() {
    const {name, gender, born, died, culture} = this.state.char; 
    if (this.state.loading) {
      return <Spinner/>
    }
    if (this.state.error) {
      return <div className="random-block rounded"><ErrorMessage/></div>
    }

    return (
      <div className="random-block rounded">
        <h4>Character: {name ? name : 'Нет данных'}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender </span>
            <span>{gender ? gender : 'Нет данных'}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born </span>
            <span>{born ? born : 'Нет данных'}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died </span>
            <span>{died ? died : 'Нет данных'}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture </span>
            <span>{culture ? culture : 'Нет данных'}</span>
          </li>
        </ul>
      </div>
    );
  }
}
