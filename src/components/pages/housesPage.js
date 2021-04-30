import React from 'react';
import ErrorMessage from '../errorMessage/errorMessage.js';
import gotService from '../../services/gotService.js';

import RowBlock from '../rowBlock/rowBlock.js';
import Children from '../children/children.js';

import ItemList from '../itemList/itemList.js';
import ItemDetail from '../itemDetail/itemDetail.js';



export default class HousesPage extends React.Component {

  gotService = new gotService();

  state = {selected: null, error: false}

  componentDidCatch() {
    this.setState({error: true})
  }

  onSelected = (key) => {
    this.setState({selected: key})
  }

  render() {
    const {error, selected} = this.state;
    if (error) {return <ErrorMessage/>}

    const list = (
      <ItemList selected={this.onSelected}
            getData={this.gotService.getAllHouses}
            label={item => `${item.name} - (${item.region})`}/>
    )

    const detail = (
      <ItemDetail selected={selected} getData={this.gotService.getHouse}>
        <Children field='region' label='Region'/>
        <Children field='words' label='Words'/>
        <Children field='titles' label='Titles'/>
        <Children field='overlord' label='Overlord'/>
        <Children field='ancestralWeapons' label='Ancestral weapons'/>
      </ItemDetail>
    )

    return (
      <RowBlock list={list} detail={detail}/>
    )
  }
}