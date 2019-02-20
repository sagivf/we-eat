// @flow strict

import axios from "axios";

const route = 'api/v1/restaurants'
const updateRoute = id => `${route}/${id}`

/*
 * action types
 */
export const RESTAURANTS_ACTION_TYPES = {
  FETCH_RESTAURANTS_SUCCESS: 'FETCH_RESTAURANTS_SUCCESS',
  FETCH_RESTAURANTS_FAILED: 'FETCH_RESTAURANTS_FAILED',
  ADD_RESTAURANTS_SUCCESS: 'ADD_RESTAURANTS_SUCCESS',
  ADD_RESTAURANTS_FAILED: 'ADD_RESTAURANTS_FAILED',
  UPDATE_RESTAURANTS_SUCCESS: 'UPDATE_RESTAURANTS_SUCCESS',
  UPDATE_RESTAURANTS_FAILED: 'UPDATE_RESTAURANTS_FAILED',
  CHANGE_EDIT_RESTAURANT: 'CHANGE_EDIT_RESTAURANT'
}

export type Action = { type: $Keys<typeof RESTAURANTS_ACTION_TYPES>, payload?: Object, error?: Error }
type Dispatch = (action: Action) => any;

/*
 * action creators
 */
export const fetch = (params:Object) => (dispatch: Dispatch) =>  {
  return axios.get(route, {params})
    .then(({data}) => dispatch({ type: RESTAURANTS_ACTION_TYPES.FETCH_RESTAURANTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: RESTAURANTS_ACTION_TYPES.FETCH_RESTAURANTS_FAILED, error }))
}

export const add = (data: Object) => (dispatch: Dispatch) =>  {
  return axios.post(route, data)
    .then(({data}) => dispatch({ type: RESTAURANTS_ACTION_TYPES.ADD_RESTAURANTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: RESTAURANTS_ACTION_TYPES.ADD_RESTAURANTS_FAILED, error }))
}

export const update = (id: string, data: Object) => (dispatch: Dispatch) =>  {
  return axios.patch(updateRoute(id), data)
    .then(({data}) => dispatch({ type: RESTAURANTS_ACTION_TYPES.UPDATE_RESTAURANTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: RESTAURANTS_ACTION_TYPES.UPDATE_RESTAURANTS_FAILED, error }))
}

export const changeEdit = (item:Object) => {
  return { type: RESTAURANTS_ACTION_TYPES.CHANGE_EDIT_RESTAURANT, payload: item }
}
