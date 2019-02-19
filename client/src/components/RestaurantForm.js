import React, { Component } from 'react'
import {Form, Input, Button, Switch} from 'antd';
import CuisineDropDown from "./select/CuisineDropDown";
import RatingDropDown from "./select/RatingDropDown";
import styled from 'styled-components'
import SpeedDropDown from "./select/SpeedDropDown";

const { createFormField } = Form

const placeHolder = "Choose one..."

const Flex = styled.div`
  display: flex;
  * {
    flex: 1;
  }
  
  > :first-child {
    flex: 2;
    margin-right: 1rem;
  }
  
  > :nth-child(2) {
    margin-right: 1rem;
  }
  
  .ant-form-item {
    align-self: flex-end;
  }
`

class RestaurantForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        return;
      }
      console.log('Received values of form: ', values);
      this.props.onSave(this.props.data, values)
    });
  }

  render() {
    const { data: cuisines } = this.props.cuisines.state
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label="Name">
          {getFieldDecorator('name', {
            rules: [{
              required: true, message: 'Please input a name',
            }],
          })(<Input placeholder={placeHolder} />)}
        </Form.Item>
        <Flex>
          <Form.Item label="Address">
            {getFieldDecorator('address', {
              rules: [{
                required: true, message: 'Please input an address',
              }],
            })(<Input placeholder={placeHolder} />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('lat', {
              rules: [{
                required: true, message: 'Please input an lat',
              }],
            })(<Input placeholder="lat" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('lng', {
              rules: [{
                required: true, message: 'Please input an lng',
              }],
            })(<Input placeholder="lng" />)}
          </Form.Item>
        </Flex>
        <Form.Item label="Rating" hasFeedback>
          {getFieldDecorator('rating', {
            rules: [
              { required: true, message: 'Please select your rating!' },
            ],
          })(
              <RatingDropDown />
          )}
        </Form.Item>
        <Form.Item label="Cuisine" hasFeedback>
          {getFieldDecorator('cuisine', {
            rules: [
              { required: true, message: 'Please select your cuisine!' },
            ],
          })(
            <CuisineDropDown data={cuisines}/>
          )}
        </Form.Item>
        <Form.Item label="Speed" hasFeedback>
          {getFieldDecorator('max_delivery_time_minutes', {
            rules: [
              { required: true, message: 'Please select speed!' },
            ],
          })(
            <SpeedDropDown />
          )}
        </Form.Item>
        <Form.Item label="10bis">
          {getFieldDecorator('accepts_10bis', {
            valuePropName: 'checked'
          })(<Switch />)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({
  name: 'restaurant' ,
  mapPropsToFields(props) {
    return {
      name: createFormField({ value: props.data && props.data.name }),
      address: createFormField({ value: props.data && props.data.address }),
      lat: createFormField({ value: props.data && props.data.lat }),
      lng: createFormField({ value: props.data && props.data.lng }),
      rating: createFormField({ value: props.data && props.data.rating }),
      cuisine: createFormField({ value: props.data && props.data.cuisine && props.data.cuisine.id }),
      'accepts_10bis': createFormField({ value: props.data && props.data.accepts_10bis }),
      max_delivery_time_minutes: createFormField({ value: props.data && props.data.max_delivery_time_minutes }),
    };
  }
})(RestaurantForm);