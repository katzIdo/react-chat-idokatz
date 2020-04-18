import {useState, useEffect, useCallback} from 'react';

const TYPER_TIMEOUT = 8000;

export const useChat = () => {
  const typingTimers = {};
  const [typers, setTypers] = useState([]);
  const [messages, setMessages] = useState([]);

  const clearTypers = (typer) =>{
      const index = typers.indexOf(typer);
      if (index !== -1) {
        typers.splice(index,1);
        setTypers([...typers]);
      }
  }

  useEffect(()=>{
    window.Chat.onMessage((msg)=>{
        clearTypers(msg.user);
        setMessages([...messages, msg]);
    });

    return ()=>{
      window.Chat.onMessage(null);
    }
  },[messages, typers]);

  useEffect(()=>{
    window.Chat.onTyping((typer)=>{
      if (typers.indexOf(typer) === -1) {
        clearTimeout(typingTimers[typer]);
        typingTimers[typer] = setTimeout(()=>{
          clearTypers(typer);
        },TYPER_TIMEOUT);
        setTypers([...typers, typer]);
      }
        
    });

    return ()=>{
      window.Chat.onTyping(null);
    }
  },[typers]);

  const sendMsg = useCallback((value) => {
    window.Chat.sendMessage(value);
  }, [])

  return {
    sendMsg,
    messages,
    typers
  }
}