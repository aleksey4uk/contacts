import React, { Component } from 'react';
import './edit-contact.css';
import { connect } from 'react-redux';
import { Card, Button } from 'antd'
import { Input, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

class EditContact extends Component {

  editContact = (e) => {
    e.target.id == 'name' ? console.log(e.target.value): console.log('хуй')
  }

  render() {
    let name, number, email;
    let classes = 'edit-contact ';
    if(this.props.editContact) {
      classes+= 'yes';
      name = this.props.editContact.name;
      number = this.props.editContact.number;
      email = this.props.editContact.email;
    }
    const {edit} = this.props;
    return (
      <div className={classes} id='edit-contact'>
        <Card
          title="Изменение контакта" /*extra={<a href="#">More</a>}*/
          style={{ width: 350}}
          onChange={(e) => this.props.editContactItem(e)}>
          <Input
            id="name"
            className="margin"
            placeholder={name}
            prefix={<UserOutlined className="site-form-item-icon" />}
            value={name}

          />
          <Input
            type="number"
            id="number"
            placeholder={number}
            className="margin"
            value={number}/>
          <Input
            placeholder={email}
            type="email"
            id="email"
            value={email}/>
          <div className="btn">
            <Button
              type="primary"
              onClick={() => this.props.editComplete()}>Изменить</Button>
            <Button
              type="primary"
              onClick={() => document.getElementById('edit-contact').style.display = 'none'}>Закрыть</Button>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
