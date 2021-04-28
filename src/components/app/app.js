import React from 'react';
import {Col, Row, Container} from 'reactstrap';

import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import Random from '../random/random.js';
import Character from '../pages/character.js';
import Houses from '../pages/houses.js';
import Books from '../pages/books.js';

import Error from '../error/error.js';
import './app.css';



export default class App extends React.Component{

  state = {random: true, error: false}

  componentDidCatch() {
    this.setState({error: true})
  }

  onButton = () => {
    const {random} = this.state;
    this.setState({random: !random});
  }

  render() {
    const {error, random} = this.state;
    const item = random ? <Random/> : null;
    if (error) {return <Error/>}

    return (
      <React.Fragment> 
        <Container>
          <Header />
        </Container>

        <Container>
            <Row>
              <Col lg={{size: 6, offset: 0}}>
                {item}
                <button onClick={this.onButton} className="button">Toggle random</button>
              </Col>
            </Row>
        </Container>

        <Container as = "<div>" className='wrapper'>
          <Character/>
        </Container>

        <Container as = "<div>" className='wrapper'>
          <Houses/>
        </Container>

        <Container as = "<div>" className='wrapper'>
          <Books/>
        </Container>

        <Container>
          <Footer/>
        </Container>
      </React.Fragment>
    )
  }
}