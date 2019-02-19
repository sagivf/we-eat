import {
  FETCH_RESTAURANTS_SUCCESS,
  ADD_RESTAURANTS_SUCCESS,
  UPDATE_RESTAURANTS_SUCCESS,
  CHANGE_EDIT_RESTAURANT
} from '../actions/restaurants'

export default function restaurants(state = {
  data: [],
  editing: null
}, action) {
  const { type, payload } = action

  switch (type) {
    case ADD_RESTAURANTS_SUCCESS:
      state.data.unshift(payload)
      return {
        ...state,
        editing: null
      }
    case UPDATE_RESTAURANTS_SUCCESS:
      const item = state.data.find(({id}) => id === payload.id)
      Object.assign(item, payload)
      return {
        ...state,
        editing: null
      }
    case CHANGE_EDIT_RESTAURANT: {
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
    case FETCH_RESTAURANTS_SUCCESS:
      return {
        ...state,
        data: payload
      }
    default:
      return state
  }
}