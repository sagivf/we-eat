// @flow strict

import axios from "axios";


type State = {}
type Action = { +type: string };
type GetState = () => State;
type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type PromiseAction = Promise<Action>;


/*
 * action types
 */
export const FETCH_RESTAURANTS_SUCCESS = 'FETCH_RESTAURANTS_SUCCESS'
export const FETCH_RESTAURANTS_FAILED = 'FETCH_RESTAURANTS_FAILED'
export const ADD_RESTAURANTS_SUCCESS = 'ADD_RESTAURANTS_SUCCESS'
export const ADD_RESTAURANTS_FAILED = 'ADD_RESTAURANTS_FAILED'

const route = 'api/v1/restaurants'

/*
 * action creators
 */
export const fetch = () => (dispatch: Dispatch) =>  {
  return axios.get(route)
    .then(({data}) => dispatch({ type: FETCH_RESTAURANTS_SUCCESS, data }))
    .catch(error => dispatch({ type: FETCH_RESTAURANTS_FAILED, error }))
}

export const add = (data: Object) => (dispatch: Dispatch) =>  {
  return axios.post(route, data)
    .then(({data}) => dispatch({ type: ADD_RESTAURANTS_SUCCESS, data }))
    .catch(error => dispatch({ type: ADD_RESTAURANTS_FAILED, error }))
}
