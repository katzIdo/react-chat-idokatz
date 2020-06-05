import React, { Component } from 'react';
import { render } from 'react-dom';

import styled, { ThemeProvider } from 'styled-components';
import StyleReset from './styles/reset';
import Theme from './styles/theme';

import ChatWindow from './components/ChatWindow/ChatWindow';

const App = () => {
  return <ThemeProvider theme={Theme}>
    <StyleReset />
    <ChatWindow />
  </ThemeProvider>
}


render(<App />, document.getElementById('root'));
