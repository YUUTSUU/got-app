import React from 'react';
import {Col, Row} from 'reactstrap';

export default class RowBlock extends React.Component {
  render() {
    const {list, detail} = this.props;
    return (
      <React.Fragment>
        <Row>
          <Col md='6'>
            {list}
          </Col>
          <Col md='6'>
            {detail}
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

