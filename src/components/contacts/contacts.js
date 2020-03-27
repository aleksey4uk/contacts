import React, {Component} from 'react';
import { Table, Tag } from 'antd';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './contacts.css';

const data = [
  {
    key: '1',
    name: 'John Brown',
    email: 32,
    number: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    email: 42,
    number: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    email: 32,
    number: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

class Contacts extends Component {

  render() {
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
