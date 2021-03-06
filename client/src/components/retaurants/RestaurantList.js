// @flow strict

import React, {Component} from 'react';
import Restaurant from "./Resturant";

class RestaurantList extends Component<any, any> {
  componentDidMount() {
    this.props.fetch()
  }
  render() {
    const { data, onEdit, onCreateReview, onRestaurantHover} = this.props
    return data.map(restaurant => <Restaurant key={restaurant.id} {...restaurant}
                                              onRestaurantHover={onRestaurantHover}
                                              onCreateReview={onCreateReview}
                                              onEdit={onEdit}/>)
  }
}
export default RestaurantList;