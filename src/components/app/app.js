import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header/header.js';
import RandomChar from '../randomChar/randomChar.js';
import CharacterPage from '../pages/characterPage.js';
import ErrorMessage from '../errorMessage/errorMessage.js';
import './app.css';

// import HousesPage from '../pages/housesPage.js';
// import BooksPage from '../pages/booksPage.js';


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
      return <ErrorMessage/>
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

          <div className="footer"></div>
        </Container>
      </>
    );
  }
}