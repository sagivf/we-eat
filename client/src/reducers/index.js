// @flow strict

import {combineReducers} from 'redux';
import restaurants from './restaurants';
import cuisines from './cuisines';

const app = combineReducers({
  restaurants,
  cuisines
})

export default app