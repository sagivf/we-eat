import React, {Component} from 'react';
import {Select} from "antd";
import styled from 'styled-components'

const { Option } = Select
const placeHolder = "Hamburger, Asian, Salads..."

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

class CuisineDropDown extends Component {
  render() {
    return (
      <Drop dropdownClassName="cuisine-drop-down-item"
            dropdownMatchSelectWidth={true}
            allowClear={true}
            {...this.props}
            size="large"
            style={{ width: '100%' }} placeholder={placeHolder}>
        {this.props.data.map(cuisine =>
          <Option key={cuisine.id} value={cuisine.id}>
            <span className="cuisine-icon">{cuisine.icon}</span>
            {cuisine.name}
          </Option>)}
      </Drop>
    )
  }
}
export default CuisineDropDown;