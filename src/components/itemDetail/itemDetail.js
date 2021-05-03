import React from 'react';
import Spinner from '../spinner/spinner.js';
import './itemDetail.css';
import {useState, useEffect} from 'react';

const ItemDetail = ({getData, selected, children}) => {
  const [detail, setDetail] = useState(null)
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    if (!selected) {return}
    setLoading(true)
    getData(selected)
      .then(item => {setDetail(item); setLoading(false)})
  }, [selected])

  if (!detail) {return <div className="error">Please select </div>}
  if (loading) {return <Spinner/>}
  const {name} = detail

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

export default ItemDetail;

ItemDetail.defaultProps = {selected: 41}