import React from 'react';
import ErrorMessage from '../errorMessage/errorMessage.js';
import gotService from '../../services/gotService.js';

// import RowBlock from '../rowBlock/rowBlock.js';
// import Children from '../children/children.js';

import ItemList from '../itemList/itemList.js';
// import ItemDetail from '../itemDetail/itemDetail.js';
import {withRouter} from 'react-router-dom';


class BooksPage extends React.Component {

  gotService = new gotService();

  state = {selected: null, error: false}

  componentDidCatch() {
    this.setState({error: true})
  }

  render() {
    const {error} = this.state;
    if (error) {return <ErrorMessage/>}
    
    return (
      <ItemList selected={(key) => this.props.history.push(key)}
            getData={this.gotService.getAllBooks}
            label={item => `${item.name} - (${item.released})`}/>

      // <RowBlock list={list} detail={detail}/>
    )
  }
}

export default withRouter(BooksPage);