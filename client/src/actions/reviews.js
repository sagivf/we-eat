// @flow strict

import axios from "axios"

const route = 'api/v1/reviews'
/*
 * action types
 */
export const REVIEWS_ACTION_TYPES = {
  ADD_REVIEWS_SUCCESS: 'ADD_REVIEWS_SUCCESS',
  ADD_REVIEWS_FAILED: 'ADD_REVIEWS_FAILED'
}

export type Action = { type: $Keys<typeof REVIEWS_ACTION_TYPES>, payload?: Object, error?: Error }
type Dispatch = (action: Action) => any;

/*
 * action creators
 */

export const add = (id: string, data: Object) => (dispatch: Dispatch) =>  {
  data.restaurant_id = id
  return axios.post(route, data)
    .then(({data}) => dispatch({ type: REVIEWS_ACTION_TYPES.ADD_REVIEWS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REVIEWS_ACTION_TYPES.ADD_REVIEWS_FAILED, error }))
}
