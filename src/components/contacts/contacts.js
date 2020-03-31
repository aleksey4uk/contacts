import React, {Component} from 'react';
import { Table, Tag, Button } from 'antd';
import { Redirect } from 'react-router-dom';
import EditContact from '../edit-contact';
import { connect } from 'react-redux';
import hocSwapiServiceContext from '../hoc/hoc-swapi-service';
import SearchPanel from '../search-panel';
import './contacts.css';

class Contacts extends Component {
  componentDidMount() {
    const {getData} = this.props.value;
    getData()
      .then((res)=>this.props.load(res))
      .then(()=>this.props.complete())
  }

  render() {
    let data;
    if(!this.props.login) return <Redirect to='/login'/>;
    if(this.props.loading) return <h1>Загрузка</h1>
    this.props.searchContacts.length >= 1 ? data = this.props.searchContacts : data = this.props.contacts;
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
            <a onClick={() => this.props.remove(text)}>Удалить</a>
          </span>
        ),
      },
    ];
    return (
      <div>
        <SearchPanel search={this.props.search}/>
        <Button
          block
          className="button-block"
          onClick={()=>this.props.add()}>Добавить контакт</Button>
        <Table columns={columns} dataSource={data} />
        <EditContact />

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
    edit: (payload) => dispatch({type: 'EDIT-CONTACT', payload}),
    load: (payload) => dispatch({type: 'LOAD', payload}),
    complete: () => dispatch({type: 'COMPLETE'}),
    remove: (payload) => dispatch({type: 'EDIT-CONTACT-REMOVE', payload}),
    search: (payload) => dispatch({type: 'SEARCH-CONTACTS', payload}),
    add: () => dispatch({type: 'ADD-CONTACT'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(hocSwapiServiceContext(Contacts));
