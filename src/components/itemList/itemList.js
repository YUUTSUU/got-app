import React, {Component} from 'react';
import './itemList.css';
import gotService from '../../services/gotService.js'

export default class ItemList extends Component {

  gotService = new gotService();

  state = {
    charList: null
  }

  render() {
    return (
      <ul className="item-list list-group">
        <li className="list-group-item">
          John Snow
        </li>
        <li className="list-group-item">
          Brandon Stark
        </li>
        <li className="list-group-item">
          Geremy
        </li>
      </ul>
    );
  }
}