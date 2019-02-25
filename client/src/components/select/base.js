// @flow strict

import React, {Component} from 'react';
import {Select} from "antd";
import styled from 'styled-components'

const { Option } = Select

const Drop = styled(Select)` 
  .ant-select-selection-selected-value {
    display: flex !important;
    width: 100%;
    justify-content: center;   
    margin: 3px; 
  }
  ${props => props.extraStyle};
`

class DropDown extends Component<any, any> {
  render() {
    const {options} = this.props
    return (
      <Drop dropdownClassName="cuisine-drop-down-item"
            dropdownMatchSelectWidth={true}
            allowClear={true}
            {...this.props}
            size="large"
            style={{ width: '100%' }}>
        {options.map(({ value, body }) => <Option value={value}>{body}</Option>)}
      </Drop>
    )
  }
}
export default DropDown;