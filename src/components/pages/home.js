import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Contacts from '../contacts';

class HomePage extends Component {

  render() {
    if(!this.props.login) {
      return <Redirect to="/login"/>
    }
    return (
      <div className="home">
        <Contacts/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(HomePage);
