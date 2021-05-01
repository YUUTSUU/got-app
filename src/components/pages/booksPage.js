import React from 'react';
import ErrorMessage from '../errorMessage/errorMessage.js';
import gotService from '../../services/gotService.js';
import {Col, Row} from 'reactstrap';

import ItemList from '../itemList/itemList.js';
import {withRouter} from 'react-router-dom';

class BooksPage extends React.Component {

  gotService = new gotService();

  state = {error: false}

  componentDidCatch() {
    this.setState({error: true})
  }

  render() {
    const {error} = this.state;
    if (error) {return <ErrorMessage/>}
    const {history} = this.props;
    
    return (
      <React.Fragment>
        <Row>
          <Col md='6'>
            <ItemList selected={(key) => history.push(key)}
                      getData={this.gotService.getAllBooks}
                      label={item => `${item.name} - (${item.released})`}/>
          </Col>
        </Row>
      </React.Fragment>      
    )
  }
}

export default withRouter(BooksPage);