import {useState, useEffect, useCallback, useReducer} from 'react';

const TYPER_TIMEOUT = 8000;

const reducer = (chat, {type, payload}) => {
  switch(type){
    case 'AddMessage':
    return {
      ...chat,
      messages: [...chat.messages, payload]
    }
    case 'AddTyper':
    return {
      ...chat,
      typers: [...chat.typers, payload]
    }
    case 'RemoveTyper':
      const typers = chat.typers;
      const index = typers.indexOf(payload);
      if (index !== -1) {
        typers.splice(index,1);
      }
      return {
        ...chat,
        typers
      }

      default:
      return {...chat}
  }
}

export const useChat = () => {
  const typingTimers = {};
  const [chat, dispatch] = useReducer(reducer, {
    messages:[],
    typers: []
  });

  useEffect(()=>{
    window.Chat.onMessage((msg)=>{
        dispatch({type: 'RemoveTyper', payload: msg.user});
        dispatch({type: 'AddMessage', payload: msg});
    });

    return ()=>{
      window.Chat.onMessage(null);
    }
  },[chat]);

  useEffect(()=>{
    window.Chat.onTyping((typer)=>{
      if (chat.typers.indexOf(typer) === -1) {
        clearTimeout(typingTimers[typer]);
        typingTimers[typer] = setTimeout(()=>{
          dispatch({type: 'RemoveTyper', payload: typer});
        },TYPER_TIMEOUT);
        dispatch({type: 'AddTyper', payload: typer});
      }
        
    });

    return ()=>{
      window.Chat.onTyping(null);
    }
  },[chat]);

  const sendMsg = useCallback((value) => {
    window.Chat.sendMessage(value);
  }, [])

  return {
    sendMsg,
    ...chat
  }
}