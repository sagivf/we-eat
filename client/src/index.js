// import 'mimic';

import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import ReactDOM from 'react-dom'
import {connect, Provider} from 'react-redux'
import thunk from 'redux-thunk';
import 'antd/dist/antd.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import app from './reducers/'
import {
  fetch as fetchRestaurants,
  add as addRestaurants,
  update as updateRestaurants,
  changeEdit as changeRestaurantsEdit
} from './actions/restaurants'
import {
  fetch as fetchCuisines
} from './actions/cuisines'

const store = createStore(
  app,
  applyMiddleware(thunk)
)

const mapDispatchToProps = dispatch => {
  return {
    restaurants: {
      fetch: params => dispatch(fetchRestaurants(params)),
      onSave: (oldValue, newValue) => {
        if (!oldValue.id && newValue) {
          dispatch(addRestaurants(newValue))
        }
        else {
          dispatch(updateRestaurants(oldValue.id, newValue))
        }
      },
      update: (id, data) => dispatch(updateRestaurants(id, data)),
      changeEditing: item => dispatch(changeRestaurantsEdit(item)),
    },
    cuisines: {
      fetch: () => dispatch(fetchCuisines())
    }
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
    cuisines: state.cuisines
  }
}

const mergeProps = (state, dispatch) => ({
  restaurants: {
    actions: dispatch.restaurants,
    state: state.restaurants
  },
  cuisines: {
    actions: dispatch.cuisines,
    state: state.cuisines
  }
})

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(App)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
