import React from 'react';
import gotService from '../../services/gotService.js';
import ItemDetail from '../itemDetail/itemDetail.js';
import Children from '../children/children.js';
import {Col, Row} from 'reactstrap';
import ErrorMessage from '../errorMessage/errorMessage.js';

export default class ItemBook extends React.Component {

  gotService = new gotService();

  state = {error: false}

  componentDidCatch() {
    this.setState({error: true})
  }

  render() {
    const {error} = this.state;
    if (error) {return <ErrorMessage/>}
    const {selected} = this.props;

    return (
      <React.Fragment>
        <Row>
          <Col md='6'>
            <ItemDetail selected={selected} getData={this.gotService.getBook}>
                  <Children field='numberOfPage' label='Number of page'/>
                  <Children field='publiser' label='Publiser'/>
                  <Children field='released' label='Released'/>
            </ItemDetail>
          </Col>
        </Row>
      </React.Fragment>
      
    )
  }
}