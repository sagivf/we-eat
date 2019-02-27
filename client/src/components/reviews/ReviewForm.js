// @flow strict

import React, { Component } from 'react'
import {Form, Input, Button} from 'antd'
import RatingDropDown from "../select/RatingDropDown"

type props = {
  form: any,
  onSave: Function,
  data: [],
  cuisines: {
    state: any
  }
}

const placeHolder = "Choose one..."

class ReviewForm extends Component<props> {

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
        <Form.Item label="Name">
          {getFieldDecorator('name', {
            rules: [{
              required: true, message: 'Please input your name',
            }],
          })(<Input placeholder={placeHolder} />)}
        </Form.Item>
        <Form.Item label="Rating" hasFeedback>
          {getFieldDecorator('rating', {
            rules: [
              { required: true, message: 'Please select your rating!' },
            ],
          })(
              <RatingDropDown />
          )}
        </Form.Item>
        <Form.Item label="Comment">
          {getFieldDecorator('comment', {
            rules: [{
              required: true, message: 'Please input a comment',
            }],
          })(<Input.TextArea placeholder={placeHolder} />)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({
  name: 'review'
})(ReviewForm);