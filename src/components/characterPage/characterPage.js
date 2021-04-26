import React from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList/itemList.js';
import CharDetails from '../charDetails/charDetails.js';
import ErrorMessage from '../errorMessage/errorMessage.js';

export default class CharacterPage extends React.Component {
  state = {
    selected: null,
    error: false
  }

  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  onSelected = (id) => {
    this.setState({
      selected: id,
    })
  }

  render() {
    if(this.state.error) {
      return <div><ErrorMessage/></div>
    }

    return (
      <>
        <Row>
          <Col md='6'>
            <ItemList onSelected={this.onSelected}/>
          </Col>
          <Col md='6'>
            <CharDetails selected={this.state.selected}/>
          </Col>
        </Row>
      </>
      
    )
  }
}