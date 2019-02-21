import React, {Component} from 'react';
import {Select} from "antd";
import styled from 'styled-components'
import star from "../../style/star.svg";

const { Option } = Select
const placeHolder = "How many stars..."

const Drop = styled(Select)`
  .ant-select-selection-selected-value {
    display: flex !important;
    width: 100%;
    justify-content: center;   
    margin: 3px; 
  }
  
  .cuisine-icon {
    font-size: 2rem;
    margin-right: 1rem;
  }
  
  img {
    width: 1rem;
    height: 2rem;
  }
`

class RatingDropDown extends Component {
  render() {
    return (
      <Drop dropdownClassName="cuisine-drop-down-item"
            dropdownMatchSelectWidth={true}
            allowClear={true}
            {...this.props}
            size="large"
            style={{ width: '100%' }} placeholder={placeHolder}>
          <Option value={1}>
            <img alt="" src={star} />
          </Option>
          <Option value={2}>
            <img alt="" src={star} />
            <img alt="" src={star} />
          </Option>
          <Option value={3}>
            <img alt="" src={star} />
            <img alt="" src={star} />
            <img alt="" src={star} />
          </Option>
          <Option value={4}>
            <img alt="" src={star} />
            <img alt="" src={star} />
            <img alt="" src={star} />
            <img alt="" src={star} />
          </Option>
          <Option value={5}>
            <img alt="" src={star} />
            <img alt="" src={star} />
            <img alt="" src={star} />
            <img alt="" src={star} />
            <img alt="" src={star} />
          </Option>
      </Drop>
    )
  }
}
export default RatingDropDown;