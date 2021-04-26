import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header/header.js';
import RandomChar from '../randomChar/randomChar.js';
import CharacterPage from '../characterPage/characterPage.js';
import ErrorMessage from '../errorMessage/errorMessage.js';
import './app.css';

export default class App extends React.Component{
  
  state = {
    button: true,
    error: false
  }

  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  onButton = () => {
    this.setState({
      button: !this.state.button
    })
  }

  render() {
    const button = this.state.button ? <RandomChar/> : null
    if (this.state.error) {
      return <div className='error-app'><ErrorMessage/></div>
    }

    return (
      <> 
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{size: 6, offset: 0}}>
              {button}
              <button onClick={this.onButton} className="button">Toggle random character</button>
            </Col>
          </Row>
          <CharacterPage/>
        </Container>
      </>
    );
  }
}