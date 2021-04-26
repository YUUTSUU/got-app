import React, {Component} from 'react';
import './itemList.css';
import gotService from '../../services/gotService.js'
import Spinner from '../spinner/spinner';

export default class ItemList extends Component {

  gotService = new gotService();

  id = 0;

  state = {
    charList: null
  }

  componentDidMount() {
    this.gotService.getAllCharacters()
    .then((charList) => {
      this.setState({
        charList
      })
    })
  }

  renderItems(arr) {
    return arr.map((item, i) => {
      const newItem = {...item, key: this.id++};
      return (
        <li key={newItem.key} className="list-group-item" onClick={() =>this.props.onSelected(581 + i)}>
          {newItem.name}
        </li>
      )
    })
  }

  render() {
    if(!this.state.charList) {
      return <Spinner/>
    }
    const items = this.renderItems(this.state.charList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}