import React, {useState, useRef,useEffect, useContext} from 'react';
import {onMessageContext} from '../../context';
import './style.scss';

export default ({ sendMessage}) => {
  const [value, setValue] = useState('');
  const handleChange = (ev)=>{
    setValue(ev.target.value);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (value !== '') {
      sendMessage(value);
      setValue('');
    }
  }

  return (
  <form className="controls">
    <input 
    placeholder="Say something"
    onChange={handleChange}
    value={value}
    />
    <button onClick={handleSubmit}>Send</button>
  </form>
  )

};
