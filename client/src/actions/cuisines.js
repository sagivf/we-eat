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
export const FETCH_CUISINES_SUCCESS = 'FETCH_CUISINES_SUCCESS'
export const FETCH_CUISINES_FAILED = 'FETCH_CUISINES_FAILED'

const route = 'api/v1/cuisines'

/*
 * action creators
 */
export const fetch = () => (dispatch: Dispatch) =>  {
  return axios.get(route)
    .then(({data}) => dispatch({ type: FETCH_CUISINES_SUCCESS, data }))
    .catch(error => dispatch({ type: FETCH_CUISINES_FAILED, error }))
}
