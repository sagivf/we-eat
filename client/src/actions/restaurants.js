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
export const UPDATE_RESTAURANTS_SUCCESS = 'UPDATE_RESTAURANTS_SUCCESS'
export const UPDATE_RESTAURANTS_FAILED = 'UPDATE_RESTAURANTS_FAILED'
export const CHANGE_EDIT_RESTAURANT = 'CHANGE_EDIT_RESTAURANT'

const route = 'api/v1/restaurants'
const updateRoute = id => `${route}/${id}`

/*
 * action creators
 */
export const fetch = (params:Object) => (dispatch: Dispatch) =>  {
  return axios.get(route, {params})
    .then(({data}) => dispatch({ type: FETCH_RESTAURANTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: FETCH_RESTAURANTS_FAILED, error }))
}

export const add = (data: Object) => (dispatch: Dispatch) =>  {
  return axios.post(route, data)
    .then(({data}) => dispatch({ type: ADD_RESTAURANTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: ADD_RESTAURANTS_FAILED, error }))
}

export const update = (id: string, data: Object) => (dispatch: Dispatch) =>  {
  return axios.patch(updateRoute(id), data)
    .then(({data}) => dispatch({ type: UPDATE_RESTAURANTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: UPDATE_RESTAURANTS_FAILED, error }))
}

export const changeEdit = (item:Object) => {
  return { type: CHANGE_EDIT_RESTAURANT, payload: item }
}
