import React, { useCallback} from 'react';
import {useChat} from './useChat';
import Controls from '../Controls';
import ChatList from './ChatList';
import './style.scss';


const ChatWindow = () => {
  const {sendMsg, messages, typers} = useChat([]);

  const sendMessage = useCallback((msg)=>{
    sendMsg(msg);
  },[])


  return (<div className='chatWindow'>
    <ChatList messages={messages} typers={typers}/>
    <Controls sendMessage={sendMessage}/>
  </div>)
}
export default ChatWindow;