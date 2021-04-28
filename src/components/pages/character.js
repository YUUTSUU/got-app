import React from 'react';
import Error from '../error/error.js';
import gotService from '../../services/gotService.js';

import Block from '../block/block.js';
import Field from '../field/field.js';

import List from '../list/list.js';
import Detail from '../detail/detail.js';



export default class Character extends React.Component {

  gotService = new gotService();

  state = {selected: null, error: false}

  componentDidCatch() {
    this.setState({error: true})
  }

  onSelected = (key) => {
    this.setState({selected: key})
  }

  renderList = () => {
    return (
      <List selected={this.onSelected} 
            getData={this.gotService.getAllCharacters} 
            label={item => `${item.name} - (${item.gender})`}/>
    )
  }

  renderDetail = () => {
    const {selected} = this.state;
    return (
      <Detail selected={selected} getData={this.gotService.getCharacter}>
        <Field field='gender' label='Gender'/>
        <Field field='born' label='Born'/>
        <Field field='died' label='Died'/>
        <Field field='culture' label='Culture'/>
      </Detail>
    )
  }

  render() {
    const {error} = this.state;
    if (error) {return <Error/>}

    return (
      <Block list={this.renderList()} detail={this.renderDetail()}/>
    )
  }
}