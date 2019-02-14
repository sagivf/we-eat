import React, {Component, Fragment} from 'react';
import Restaurant from "./Resturant";

class RestaurantList extends Component {
  componentDidMount() {
    this.props.fetch()
  }
  render() {
    const { data } = this.props
    return (
      <Fragment>
        {data.map((restaurant, index) => <Restaurant key={index} {...restaurant}/>)}
      </Fragment>
    )
  }
}
export default RestaurantList;