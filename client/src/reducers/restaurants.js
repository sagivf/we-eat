import {
  FETCH_RESTAURANTS_SUCCESS,
  ADD_RESTAURANTS_SUCCESS,
} from '../actions/restaurants'

export default function restaurants(state = {
  data: []
}, action) {
  const {type, data} = action

  switch (type) {
    case ADD_RESTAURANTS_SUCCESS:
    case FETCH_RESTAURANTS_SUCCESS:
      return {
        ...state,
        data
      }
    default:
      return state
  }
}