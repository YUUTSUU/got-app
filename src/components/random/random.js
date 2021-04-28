import React from 'react';
import gotService from '../../services/gotService.js'
import Spinner from '../spinner/spinner.js';
import Error from '../error/error.js';
import './random.css';

export default class Random extends React.Component {

  gotService = new gotService();

  state = {random: null, loading: true, error: false};
    
  componentDidMount() {
    this.updateRandom();
    this.timer = setInterval(this.updateRandom, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  onRandom = (item) => {
    this.setState({random: item, loading: false});
  }

  onError = () => {
    this.setState({error: true, loading: false})
  }

  updateRandom = () => {
    const number = Math.floor(Math.random()*140 + 25);
    this.gotService.getCharacter(number)
      .then(this.onRandom)
      .catch(this.onError)
  }

  render() {
    const {random, loading, error} = this.state;
    if (loading) {return <Spinner/>};
    if (error) {return <Error/>};
    const {name, gender, born, died, culture} = random; 
    
    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  }
}
