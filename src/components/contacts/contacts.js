import React, {Component} from 'react';
import { Table, Tag } from 'antd';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import hocSwapiServiceContext from '../hoc/hoc-swapi-service';
import './contacts.css';

class Contacts extends Component {
  componentDidMount() {
    console.log(this.props.value);
    const {getData} = this.props.value;
    getData()
      .then((res)=>this.props.load(res))
      .then(()=>this.props.complete())
  }

  render() {
    if(!this.props.login) return <Redirect to='/login'/>;
    if(this.props.loading) return <h1>Загрузка</h1>
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
    edit: (payload) => dispatch({type: 'EDIT-CONTACT', payload}),
    load: (payload) => dispatch({type: 'LOAD', payload}),
    complete: () => dispatch({type: 'COMPLETE'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(hocSwapiServiceContext(Contacts));
