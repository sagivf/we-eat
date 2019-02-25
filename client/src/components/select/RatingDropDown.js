// @flow strict

import React from 'react'
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
  body: Array.from({length: index + 1}).map(() => <img alt="" src={star} />)
}))

const RatingDropDown = (props: any) =>
      <DropDown {...props}
                placeholder={placeHolder}
                options={options}
                extraStyle={extraStyle}>
      </DropDown>

export default RatingDropDown;