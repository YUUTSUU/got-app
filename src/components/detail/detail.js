import React from 'react';
import Spinner from '../spinner/spinner.js';
import './detail.css';

export default class Detail extends React.Component {
  state = {detail: null, loading: null};

  componentDidMount() {
    this.updateDetail();
  }

  componentDidUpdate(prevProps) {
    const {selected} = this.props;
    if (selected !== prevProps.selected) {this.updateDetail()};
  }

  updateDetail() {
    const {getData, selected} = this.props;
    if (!selected) {return};
    this.setState({loading: true});
    getData(selected)
      .then(item => this.setState({detail: item, loading: false}));
  }

  render() {
    const {detail, loading} = this.state;
    if (!detail) {return <div className="error">Please select a character</div>};
    if (loading) {return <Spinner/>};

    const {name} = detail;
    const children = this.props.children //fragment

    return (
      <React.Fragment>
        <div className="detail rounded">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">

            {React.Children.map(children, child => React.cloneElement(child, {detail}))}
            
          </ul>
        </div>
      </React.Fragment>
    )
  }
}