import React, { Component } from 'react'
import {Form, Input, Select, Button, Switch} from 'antd';

const { Option } = Select;

const cuisines = [
  { value: 1234, label: 'Pizza' },
  { value: 4321, label: 'Meet' }
];

const ratings = [
  { value: 1, label: '1' },
  { value: 2, label: '2' }
];

const placeHolder = "Choose one..."

class RestaurantForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        return;
      }
      console.log('Received values of form: ', values);
      this.props.onSave(values)
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item
          label="Restaurants Name"
        >
          {getFieldDecorator('name', {
            rules: [{
              required: true, message: 'Please input a name',
            }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="Cuisine Type" hasFeedback>
          {getFieldDecorator('cuisine', {
            rules: [
              { required: true, message: 'Please select your cuisine!' },
            ],
          })(
            <Select placeholder={placeHolder}>
              {cuisines.map(cuisine => <Option value={cuisine.value}>{cuisine.label}</Option>)}
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Rating" hasFeedback>
          {getFieldDecorator('rating', {
            rules: [
              { required: true, message: 'Please select your rating!' },
            ],
          })(
            <Select placeholder={placeHolder}>
              {ratings.map(rating => <Option value={rating.value}>{rating.label}</Option>)}
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Cuisine Type" hasFeedback>
          {getFieldDecorator('cuisine', {
            rules: [
              { required: true, message: 'Please select your cuisine!' },
            ],
          })(
            <Select placeholder={placeHolder}>
              {cuisines.map(cuisine => <Option value={cuisine.value}>{cuisine.label}</Option>)}
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Accepts 10bis">
          {getFieldDecorator('10bis', { valuePropName: 'checked' })(
            <Switch />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'restaurant' })(RestaurantForm);