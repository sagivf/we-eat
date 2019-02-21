// @flow strict

import React, {Component} from 'react'
import {css} from 'styled-components'
import DropDown from './base'
import star from "../../style/star.svg"
const placeHolder = "How many stars..."

const extraStyle = css` 
  img {
    width: 1rem;
    height: 2rem;
  }
`

const options = Array.from({length: 5}).map((_, index) => ({
  value: index + 1,
  body: Array.from({length: index + 1}).map((_, index) => <img key={index} alt="" src={star} />)
}))

export default class RatingDropDown extends Component<any> {
  render() {
    return <DropDown {...this.props}
              placeholder={placeHolder}
              options={options}
              extraStyle={extraStyle}>
    </DropDown>
  }
}
