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
  add as  addRestaurants
} from './actions/restaurants'

const store = createStore(
  app,
  applyMiddleware(thunk)
)

const mapDispatchToProps = dispatch => {
  return {
    restaurants: {
      fetch: () => dispatch(fetchRestaurants()),
      add: id => dispatch(addRestaurants(id))
    }
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

const mergeProps = (state, dispatch) => ({
  restaurants: {
    actions: dispatch.restaurants,
    state: state.restaurants
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
