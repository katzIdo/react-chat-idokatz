import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ENTER_KEY_CODE = 13;

const ChatInput = styled.input`
  width:100%;
  height:3rem;
  line-height:3rem;
  background-color : ${props => props.theme.backgrounds.primary};
  border-radius: 3px;
  margin: 0.5rem 0 0.1rem 0;
  padding: 0 1rem;
  color: ${props => props.theme.colors.primary}
`

const ChatFooter = ({ sendMessage }) => {
  const [value, setValue] = useState('');
  
  const handleChange = (ev) => {
      setValue(ev.target.value);
    
  }

  const handleKeyUp = (ev) => {
    if (ev.keyCode === ENTER_KEY_CODE && value !== '') {
      sendMessage(value);
      setValue('');
    }
  }
  return (
    <ChatInput
      placeholder="Say something"
      onChange={handleChange}
      onKeyUp={handleKeyUp}
      value={value}
    />
  )

};

ChatFooter.propTypes = {
  sendMessage: PropTypes.func.isRequired
}

export default ChatFooter;
