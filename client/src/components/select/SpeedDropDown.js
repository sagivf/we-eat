import React, {Component} from 'react';
import {Select} from "antd";
import styled from 'styled-components'

const { Option } = Select
const placeHolder = "How long will it be..."

const Drop = styled(Select)`
  .ant-select-selection-selected-value {
    display: flex !important;
    width: 100%;
    justify-content: center;    
  }
  
  .cuisine-icon {
    font-size: 2rem;
    margin-right: 1rem;
  }
`

class SpeedDropDown extends Component {
  render() {
    return (
      <Drop dropdownMatchSelectWidth={true}
            dropdownClassName="cuisine-drop-down-item"
            {...this.props}
            size="large"
            style={{ width: '100%' }} placeholder={placeHolder}>
          <Option value={30}>30 Minutes</Option>
          <Option value={60}>1 Hour</Option>
          <Option value={120}>2 Hours</Option>
      </Drop>
    )
  }
}
export default SpeedDropDown;