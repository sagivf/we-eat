import React, {Component, Fragment} from 'react';
import axios from 'axios';
import Restaurant from "./Resturant";

class RestaurantList extends Component {
  state = {
    items: []
  }
  componentDidMount() {
    axios.get('api/v1/restaurants.json')
      .then(response => {
        this.setState({
          items: response.data
        })
      })
      .catch(error => console.log(error))
  }
  render() {
    return (
      <Fragment>
        {this.state.items.map( (restaurant, index) => <Restaurant key={index} {...restaurant}/>)}
      </Fragment>
    )
  }
}
export default RestaurantList;