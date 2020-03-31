import React, { Component } from 'react';
import './edit-contact.css';
import { connect } from 'react-redux';
import { Card, Button } from 'antd'
import { Input, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

class EditContact extends Component {

  render() {
    let name, number, email, actionName;
    let classes = 'edit-contact ';
    if(this.props.editContact) {
      classes+= 'yes';
      name = this.props.editContact.name;
      number = this.props.editContact.number;
      email = this.props.editContact.email;
      actionName = this.props.actionType === 'ADD' ? "Добавить" : "Изменить";
    }
    const {edit} = this.props;
    return (
      <div className={classes} id='edit-contact'>
        <Card
          title={actionName + ' Контакт'} /*extra={<a href="#">More</a>}*/
          style={{ width: 350}}
          onChange={(e) => this.props.editContactItem(e)}>
          <Input
            id="name"
            className="margin"
            placeholder="Имя"
            prefix={<UserOutlined className="site-form-item-icon" />}
            value={name}

          />
          <Input
            type="number"
            id="number"
            placeholder="Номер"
            className="margin"
            value={number}/>
          <Input
            placeholder="Email"
            type="email"
            id="email"
            value={email}/>
          <div className="btn">
            <Button
              type="primary"
              onClick={() => this.props.editComplete()}>{actionName}</Button>
            <Button
              type="primary"
              onClick={() => this.props.editContactCancel()}>Закрыть</Button>
          </div>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editContactItem: (payload) => dispatch({type: 'EDIT-CONTACT-ITEM', payload}),
    editComplete: () => dispatch({type: 'EDIT-CONTACT-COMPLETE'}),
    editContactCancel: () => dispatch({type: 'EDIT-CONTACT-CANCEL'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
