import React, { Component } from 'react';
import { render } from 'react-dom';
import ChatWindow from './ChatWindow';
import './style.scss';


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ChatWindow/>
    );
  }
}

render(<App />, document.getElementById('root'));
