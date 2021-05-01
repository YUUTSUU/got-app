import React from 'react';
import {Col, Row} from 'reactstrap';
import ItemRandom from '../itemRandom/itemRandom.js';

export default class RandomPage extends React.Component {
  state = {random: true}

  onButton = () => {
    const {random} = this.state;
    this.setState({random: !random});
  }

  render() {
    const {random} = this.state;
    const item = random ? <ItemRandom /> : null;

    return (
      <Row>
          <Col lg={{size: 6, offset: 0}}>
            {item}
            <button onClick={this.onButton} className="button">Toggle random</button>
          </Col>
      </Row>
    )
  }
}