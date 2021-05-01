import React from 'react';
import Spinner from '../spinner/spinner';
import './itemList.css';
import PropTypes from 'prop-types';
import gotService from '../../services/gotService.js'

class ItemList extends React.Component {
  static defaultProps = {selected: () => {}}
  static propTypes = {selected: PropTypes.func}

  renderItems(list) {
    const {selected, label} = this.props;
    return list.map(item => {
      const {key} = item;
      return <li key={key} className="list-group-item" onClick={() => selected(key)}>{label(item)}</li>
    })
  }

  render() {
    const {data} = this.props;
    const items = this.renderItems(data);

    return (
      <React.Fragment>
        <ul className="item-list list-group list-scroll">
          {items}
        </ul>
      </React.Fragment>
    )
  }
}



const withData = (View, getData) => {
  return class extends React.Component {
    state = {data: null, loading: true}
  
    componentDidMount() {
      getData().then(items => this.setState({data: items, loading: false}))}

    render() {
      const {data, loading} = this.state;
      if (loading) {return <Spinner/>};

      return <View {...this.props} data={data}/>
    }
  }
}

const {getAllCharacters} = new gotService();
export default withData(ItemList, getAllCharacters);