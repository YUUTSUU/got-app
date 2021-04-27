import React from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList/itemList.js';
import ItemDetail from '../itemDetail/itemDetail.js';
import ErrorMessage from '../errorMessage/errorMessage.js';
import gotService from '../../services/gotService.js';

export default class BooksPage extends React.Component {

  gotService = new gotService();

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
            <ItemList onSelected={this.onSelected} getData={this.gotService.getAllBooks}/>
          </Col>
          <Col md='6'>
            <ItemDetail selected={this.state.selected} getData={this.gotService.getBooks}/>
          </Col>
        </Row>
      </>
      
    )
  }
}