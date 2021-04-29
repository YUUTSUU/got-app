import React from 'react';
import Error from '../error/error.js';
import gotService from '../../services/gotService.js';

import Block from '../block/block.js';
import Field from '../field/field.js';

import List from '../list/list.js';
import Detail from '../detail/detail.js';



export default class Houses extends React.Component {

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
    if (error) {return <Error/>}

    const list = (
      <List selected={this.onSelected}
            getData={this.gotService.getAllHouses}
            label={item => `${item.name} - (${item.region})`}/>
    )

    const detail = (
      <Detail selected={selected} getData={this.gotService.getHouse}>
        <Field field='region' label='Region'/>
        <Field field='words' label='Words'/>
        <Field field='titles' label='Titles'/>
        <Field field='overlord' label='Overlord'/>
        <Field field='ancestralWeapons' label='Ancestral weapons'/>
      </Detail>
    )

    return (
      <Block list={list} detail={detail}/>
    )
  }
}