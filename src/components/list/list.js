import React from 'react';
import Spinner from '../spinner/spinner';
import './list.css';

export default class List extends React.Component {
  state = {list: null, loading: true}
  
  componentDidMount() {
    const {getData} = this.props;
    getData()
      .then(item => this.setState({list: item, loading: false}));
  }

  renderItems(list) {
    const {selected, label} = this.props;
    return list.map(item => {
      const {key} = item;
      return <li key={key} className="list-group-item" onClick={() => selected(key)}>{label(item)}</li>
    })
  }

  render() {
    const {list, loading} = this.state;
    if (loading) {return <Spinner/>};
    const items = this.renderItems(list);

    return (
      <React.Fragment>
        <ul className="item-list list-group list-scroll">
          {items}
        </ul>
      </React.Fragment>
    )
  }
}