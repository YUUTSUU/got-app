import React from 'react';
import gotService from '../../services/gotService.js';
import ItemDetail from '../itemDetail/itemDetail.js';
import Children from '../children/children.js';


export default class ItemBook extends React.Component {

  gotService = new gotService();

  render() {
    const selected = this.props.selected;

    return (
      <ItemDetail selected={selected} getData={this.gotService.getBook}>
        <Children field='numberOfPage' label='Number of page'/>
        <Children field='publiser' label='Publiser'/>
        <Children field='released' label='Released'/>
      </ItemDetail>
    )
  }

}