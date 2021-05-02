import React from 'react';
import './itemList.css';
import PropTypes from 'prop-types';
import withData from '../withData/withData.js';

const ItemList = ({list, selected, label}) => {
  return list.map(item => {
    const {key} = item;
    return <li key={key} className="list-group-item" onClick={() => selected(key)}>{label(item)}</li>
  })
}

export default withData(ItemList);

ItemList.defaultProps = {selected: () => {}};
ItemList.propTypes = {selected: PropTypes.func};