// @flow strict

import React, {Component, Fragment} from 'react';
import Restaurant from "./Resturant";

class RestaurantList extends Component<any, any> {
  componentDidMount() {
    this.props.fetch()
  }
  render() {
    const { data, onEdit, onCreateReview } = this.props
    return (
      <Fragment>
        {data.map((restaurant, index) => <Restaurant key={index} {...restaurant}
                                                     onCreateReview={onCreateReview}
                                                     onEdit={onEdit}/>)}
      </Fragment>
    )
  }
}
export default RestaurantList;