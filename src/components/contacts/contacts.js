import React, {Component} from 'react';
import { Table, Tag } from 'antd';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './contacts.css';

class Contacts extends Component {

  render() {
    console.log(this.props)
    const {contacts:data} = this.props;
    const columns = [
      {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Эл. почта',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Номер телефона',
        dataIndex: 'number',
        key: 'number',
      },
      {
        title: 'Действия',
        key: 'action',
        render: (text, record) => (
          <span>
            <a style={{ marginRight: 16}}
                onClick={() => this.props.edit(text)}>Изменить</a>
            <a>Удалить</a>
          </span>
        ),
      },
    ];
    return (
      <div>
        <Table columns={columns} dataSource={data} />
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
    edit: (payload) => dispatch({type: 'EDIT-CONTACT', payload})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
