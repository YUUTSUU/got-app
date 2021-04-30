import React from 'react';
import {Container} from 'reactstrap';
import {Route} from 'react-router-dom';

import Header from '../header/header.js';
import RandomPage from '../pages/randomPage.js';
import CharacterPage from '../pages/charactersPage.js';
import HousesPage from '../pages/housesPage.js';
import BooksPage from '../pages/booksPage.js';

import ItemBook from '../itemPages/itemBook.js';

import ErrorMessage from '../errorMessage/errorMessage';

import './app.css';

export default class App extends React.Component{

  state = {error: false}

  componentDidCatch() {
    this.setState({error: true})
  }

  render() {
    const {error} = this.state;
    if (error) {return <ErrorMessage/>}

    return (
      <React.Fragment> 
          <Container>
              <Header/>
          </Container>
          <Container>
                <Route path='/' component={RandomPage}/>
          </Container>
          <Container>
            <Route path='/characters' exact component={CharacterPage}/>
            <Route path='/houses' exact component={HousesPage}/>
            <Route path='/books' exact component={BooksPage}/>

            <Route path='/books/:number' 
              render={ ({match}) => {
                const {number} = match.params;
                return <ItemBook selected={number}/>
              }
            }/> 
            
          </Container>
      </React.Fragment>
    )
  }
}