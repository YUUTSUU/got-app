import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage.js';

export default class ItemList extends Component {

  state = {
    list: null,
    loading: true,
    error: false
  }

  componentDidMount() {
    const {getData} = this.props;
    getData()
    .then((list) => {
      this.setState({
        list,
        loading: false
      })
    })
    // .catch(() => {this.onError()})
  }

  componentDidCatch() {
    this.setState({
      list: null,
      error: true
    })
  }

  // onError = () => {
  //   this.setState({
  //     list: null,
  //     error: true,
  //     loading: false
  //   })
  // }

  renderItems(arr) {
    return arr.map((item, i) => {

      // return (
      //   <li key={item.id} className="list-group-item" onClick={() => this.props.onSelected(item.id)}>
      //     {item.name}
      //   </li>
      // )

      const id = item.url.slice(49);
      const newItem = {...item, key: id};
      return (
        <li key={newItem.key} className="list-group-item" onClick={() => this.props.onSelected(newItem.key)}>
          {newItem.name}
        </li>
      )
    })
  }

  render() {
    if(this.state.loading) {
      return <Spinner/>
    }
    if (this.state.error) {
      return <ErrorMessage/>
    }
    const items = this.renderItems(this.state.list);

    return (
      <ul className="item-list list-group list-scroll">
        {items}
      </ul>
    );
  }
}