import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {

  state = {
    error: false,
  }

  componentDidCatch(error) {
    this.setState({error: true})
    console.log('Произошла ошибка рендеринга: ', error)
  }

  render() {
    if (this.state.error) {
      return <ErrorIndicator />
    }
    return this.props.children;
  }
}
