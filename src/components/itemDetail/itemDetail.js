import React, {Component} from 'react';
import './itemDetail.css';
import Spinner from '../spinner/spinner.js';
import ErrorMessage from '../errorMessage/errorMessage.js';

export default class ItemDetail extends Component {

  state = {
    item: null,
    loading: null,
    error: false
  }

  componentDidMount() {
    this.updateDetails();
  }

  componentDidUpdate(prevProps) {
    if(this.props.selected !== prevProps.selected) {
      this.updateDetails();
    }
  }

  componentDidCatch() {
    this.setState({
      item: null,
      error: true
    })
  }

  // onError = () => {
  //   this.setState({
  //     item: null,
  //     error: true,
  //     loading: false
  //   })
  // }

  updateDetails() {
    if (!this.props.selected) {
      return;
    }
    this.setState({
      loading: true
    })
    this.props.getData(this.props.selected)
    .then((item) => {
      this.setState({
        item,
        loading: false
      })
    })
    // .catch(() => {this.onError()})
  }

  render() {
    if (!this.state.item) {
        return <div className="select-error">Please select a character</div>
    }
    if (this.state.loading) {
      return <Spinner/>
    }
    if (this.state.error) {
      return <ErrorMessage/>
    }
    const {name, gender, born, died, culture} = this.state.item;
    

    return (
      <div className="char-details rounded">
        <h4>{name ? name : 'There is no data'}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender</span>
            <span>{gender ? gender : 'There is no data'}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born</span>
            <span>{born ? born : 'There is no data'}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died</span>
            <span>{died ? died : 'There is no data'}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture</span>
            <span>{culture ? culture : 'There is no data'}</span>
          </li>
        </ul>
      </div>
    );
  }
}