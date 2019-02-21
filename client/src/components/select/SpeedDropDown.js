// @flow strict

import React, {Component} from 'react'
import DropDown from './base'

const placeHolder = "How long will it be..."
const options = [
  { value: 30, body: "30 Minutes" },
  { value: 60, body: "1 Hour" },
  { value: 120, body: "2 Hours" }
]

export default class SpeedDropDown extends Component<any> {
  render () {
      return <DropDown {...this.props}
                placeholder={placeHolder}
                options={options}>
      </DropDown>
  }
}