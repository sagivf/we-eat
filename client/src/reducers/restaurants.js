// @flow strict

import {RESTAURANTS_ACTION_TYPES} from '../actions/restaurants'
import type { Action } from '../actions/restaurants'

type State = {
  data: Array<any>,
  editing: ?boolean
}

export default function restaurants(state: State = {
  data: [],
  editing: null
}, action: Action) {
  const { type, payload } = action

  switch (type) {
    case RESTAURANTS_ACTION_TYPES.ADD_RESTAURANTS_SUCCESS:
      state.data.unshift(payload)
      return {
        ...state,
        editing: null
      }
    case RESTAURANTS_ACTION_TYPES.UPDATE_RESTAURANTS_SUCCESS: {
      if (typeof payload === 'object') {
        const item = state.data.find(({id}) => id === payload.id)
        Object.assign(item, payload)
      }
      return {
        ...state,
        editing: null
      }
    }
    case RESTAURANTS_ACTION_TYPES.CHANGE_EDIT_RESTAURANT: {
      let editing = null
      if (typeof payload === 'number') {
        editing = state.data.find(({id}) => id === payload)
      } else {
        editing = payload
      }
      return {
        ...state,
        editing
      }
    }
    case RESTAURANTS_ACTION_TYPES.FETCH_RESTAURANTS_SUCCESS:
      return {
        ...state,
        data: payload
      }
    default:
      return state
  }
}