// @flow strict

import React  from 'react'
import star from '../style/star.svg'
import styled from 'styled-components'


const Img = styled.img`
  width: 1rem;
  height: 2rem;
`

type Props = {
  count: number
}

const Stars = ({count}: Props) : Array<Img> => {
  return Array.from({length: count}).map((_, index) => <Img key={index} alt="" src={star}/>)
}

export default Stars