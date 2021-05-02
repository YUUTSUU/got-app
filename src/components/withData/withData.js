import React from 'react';
import Spinner from '../spinner/spinner';

const withData = (View) => {
  return class extends React.Component {
    state = {list: null, loading: true}
  
    componentDidMount() {
      const {getData} = this.props;
      getData().then(items => this.setState({list: items, loading: false}))}

    render() {
      const {list, loading} = this.state;
      if (loading) {return <Spinner/>};

      return (
        <ul className="item-list list-group list-scroll">
          <View {...this.props} list={list}/>
        </ul>
      ) 
    }
  }
}

export default withData;