// @flow strict

import React, {Fragment} from 'react';
import {css} from 'styled-components'
import DropDown from './base'
const placeHolder = "Hamburger, Asian, Salads..."

const extraStyle = css`
  .cuisine-icon {
    font-size: 2rem;
    margin-right: 1rem;
  }
`

const CuisineDropDown = ({data, ...props}: any) =>
  <DropDown {...props}
            extraStyle={extraStyle}
            placeholder={placeHolder}
            options={data.map(cuisine => ({
            value: cuisine.id,
            body: <Fragment>
              <span className="cuisine-icon">{cuisine.icon}</span>
              {cuisine.name}
            </Fragment>
          }))}>
  </DropDown>

export default CuisineDropDown;