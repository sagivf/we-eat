// @flow strict

import React, {Fragment, Component} from 'react';
import {css} from 'styled-components'
import DropDown from './base'
const placeHolder = "Hamburger, Asian, Salads..."

const extraStyle = css`
  .cuisine-icon {
    font-size: 2rem;
    margin-right: 1rem;
  }
`

export default class SpeedDropDown extends Component<any> {
  render() {
    return <DropDown {...this.props}
                     extraStyle={extraStyle}
                     placeholder={placeHolder}
                     options={this.props.data.map(cuisine => ({
                       value: cuisine.id,
                       body: <Fragment>
                         <span className="cuisine-icon">{cuisine.icon}</span>
                         {cuisine.name}
                       </Fragment>
                     }))}>
    </DropDown>
  }
}