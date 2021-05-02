import React from 'react';
import {Col, Row} from 'reactstrap';

const RowBlock = ({list, detail}) => {
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

export default RowBlock;