import React, {Component, Fragment} from 'react';
import Restaurant from "./Resturant";

class RestaurantList extends Component {
  componentDidMount() {
    this.props.fetch()
  }
  render() {
    const { data, onEdit } = this.props
    return (
      <Fragment>
        {data.map((restaurant, index) => <Restaurant key={index} {...restaurant} onEdit={onEdit}/>)}
      </Fragment>
    )
  }
}
export default RestaurantList;