import React from 'react';
import ErrorMessage from '../errorMessage/errorMessage.js';
import gotService from '../../services/gotService.js';

import RowBlock from '../rowBlock/rowBlock.js';
import Children from '../children/children.js';

import ItemList from '../itemList/itemList.js';
import ItemDetail from '../itemDetail/itemDetail.js';



export default class CharacterPage extends React.Component {

  gotService = new gotService();

  state = {selected: null, error: false};

  componentDidCatch() {
    this.setState({error: true});
  }

  onSelected = (key) => {
    this.setState({selected: key});
  }

  render() {
    const {error, selected} = this.state;
    if (error) {return <ErrorMessage/>}

    const list = (
      <ItemList selected={this.onSelected} 
            getData={this.gotService.getAllCharacters} 
            label={item => `${item.name} - (${item.gender})`}/>
    )

    const detail = (
      <ItemDetail selected={selected} getData={this.gotService.getCharacter}>
            <Children field='gender' label='Gender'/>
            <Children field='born' label='Born'/>
            <Children field='died' label='Died'/>
            <Children field='culture' label='Culture'/>
      </ItemDetail>
    )

    return (
      <RowBlock list={list} detail={detail}/>
    )
  }
}