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

const DropDown = ({options, ...props}: any) =>
    <Drop dropdownClassName="cuisine-drop-down-item"
          dropdownMatchSelectWidth={true}
          allowClear={true}
          {...props}
          size="large"
          style={{ width: '100%' }}>
      {options.map(({ value, body }) => <Option key={value} value={value}>{body}</Option>)}
    </Drop>

export default DropDown;