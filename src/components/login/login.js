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
    console.log(this.props.value)
    //1. Запускаем загрузку
    const {getUsers} = this.props.value;
    getUsers()
      .then((res) => this.props.onLoadUsers(res))
      .then(() => this.props.onLogin(values))
  }

  render() {
    const { props } = this;
    const onFinish = values => this.loadUsers(values);
    const onFinishFailed = errorInfo => console.log('Failed:', errorInfo);
    let pass;
    if(props.login===false) pass = (<p>Не верный пароль</p>);
    if(props.loading) return <h1>Загрузка...</h1>
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
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadUsers: (payload) => dispatch({type: 'ON-LOGIN-LOAD', payload}),
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
