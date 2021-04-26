import React, {Component} from 'react';
import './charDetails.css';
import gotService from '../../services/gotService.js'

export default class CharDetails extends Component {

  gotService = new gotService();

  state = {
    char: null
  }

  componentDidMount() {
    this.updateDetails();
  }

  componentDidUpdate(prevProps) {
    if(this.props.selected !== prevProps.selected) {
      this.updateDetails();
    }
  }

  updateDetails() {
    if (!this.props.selected) {
      return;
    }
    this.gotService.getCharacter(this.props.selected)
    .then((char) => {
      this.setState({
        char
      })
    })
  }

  render() {
    if (!this.state.char) {
        return <div className="select-error">Please select a character</div>
    }
    const {name, gender, born, died, culture} = this.state.char;

    return (
      <div className="char-details rounded">
        <h4>{name ? name : 'Нет данных'}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender</span>
            <span>{gender ? gender : 'Нет данных'}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born</span>
            <span>{born ? born : 'Нет данных'}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died</span>
            <span>{died ? died : 'Нет данных'}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture</span>
            <span>{culture ? culture : 'Нет данных'}</span>
          </li>
        </ul>
      </div>
    );
  }
}