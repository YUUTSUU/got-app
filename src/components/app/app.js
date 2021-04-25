import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header/header.js';
import RandomChar from '../randomChar/randomChar.js';
import ItemList from '../itemList/itemList.js';
import CharDetails from '../charDetails/charDetails.js';
import './app.css';

export default class App extends React.Component{
  
  state = {
    button: true
  }

  onButton = () => {
    this.setState({
      button: !this.state.button
    })
  }

  render() {
    const button = this.state.button ? <RandomChar/> : null

    return (
      <> 
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{size: 5, offset: 0}}>
              {button}
              <button onClick={this.onButton} className="button">Toggle character</button>
            </Col>
          </Row>
          <Row>
            <Col md='6'>
              <ItemList />
            </Col>
            <Col md='6'>
              <CharDetails />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}