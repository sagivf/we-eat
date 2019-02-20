// @flow strict

import { CUISINE_ACTION_TYPES } from '../actions/cuisines'
import type { Action } from '../actions/cuisines'

type State = {
  data: Array<any>
}

export default function cuisines(state: State = {
  data: []
}, action: Action) {
  const {type, payload} = action

  switch (type) {
    case CUISINE_ACTION_TYPES.FETCH_CUISINES_SUCCESS:
      return {
        ...state,
        data: payload
      }
    default:
      return state
  }
}