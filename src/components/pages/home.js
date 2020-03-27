import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class HomePage extends Component {

  render() {
    console.log(this.props)
    if(!this.props.login) {
      return <Redirect to="/login"/>
    }
    return (
      <div className="home">
        <h1>Здесь должна быть секретная страница...</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    test: () => console.log('меня вызвали')
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
