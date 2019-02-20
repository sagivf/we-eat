// @flow strict

import axios from "axios"

const route = 'api/v1/cuisines'

/*
 * action types
 */
export const CUISINE_ACTION_TYPES = {
  FETCH_CUISINES_SUCCESS: 'FETCH_CUISINES_SUCCESS',
  FETCH_CUISINES_FAILED: 'FETCH_CUISINES_FAILED'
}


export type Action = { type: $Keys<typeof CUISINE_ACTION_TYPES>, payload?: any, error?: Error }
type Dispatch = (action: Action) => any;

/*
 * action creators
 */
export const fetch = () => (dispatch: Dispatch) =>  {
  return axios.get(route)
    .then(({data}) => dispatch({ type: CUISINE_ACTION_TYPES.FETCH_CUISINES_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: CUISINE_ACTION_TYPES.FETCH_CUISINES_FAILED, error }))
}
