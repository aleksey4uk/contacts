import { Form, Input, Button, Checkbox } from 'antd';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import hocSwapiServiceContext from '../hoc/hoc-swapi-service';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class Login extends Component {

  loadUsers(values) {
    //1. Запускаем загрузку
    const {getData} = this.props.value;
    getData()
      .then((data) => {
        this.props.load(data)
      })
      .then(() => this.props.complete())
      .then(() => this.props.onLogin(values))
    //2. Если загрузка успешна, меняем флаг загрузки на false,
    //this.props.complete();
  }

  render() {
    const { props } = this;
    const onFinish = values => this.loadUsers(values);
    const onFinishFailed = errorInfo => console.log('Failed:', errorInfo);
    if(props.login) return <Redirect to='/' />;

    return (
      <div className="forms">
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <button onClick={(event)=>props.loginIn(event)}>залогиниться</button>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    load: (payload) => dispatch({type: 'LOAD', payload}),
    complete: () => dispatch({type: 'COMPLETE'}),
    onLogin: (payload) => dispatch({type: 'ON-LOGIN', payload})
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(hocSwapiServiceContext(Login));
//
