// @flow strict

import React, {Component} from 'react'
import DropDown from './base'
import Stars from '../Stars'

const placeHolder = "How many stars..."

const options = Array.from({length: 5}).map((_, index) => ({
  value: index + 1,
  body: <Stars count={index + 1}/>
}))

export default class RatingDropDown extends Component<any> {
  render() {
    return <DropDown {...this.props}
              placeholder={placeHolder}
              options={options} />
  }
}
