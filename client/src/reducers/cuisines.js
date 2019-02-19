import {
  FETCH_CUISINES_SUCCESS
} from '../actions/cuisines'

export default function cuisines(state = {
  data: []
}, action) {
  const {type, data} = action

  switch (type) {
    case FETCH_CUISINES_SUCCESS:
      return {
        ...state,
        data
      }
    default:
      return state
  }
}