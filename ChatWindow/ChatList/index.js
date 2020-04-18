import React, {useRef, useEffect} from 'react';
import ChatMessage from '../ChatMessage';
import './style.scss';

const ChatList = ({messages, typers}) => {

const typerRef = useRef(null);

useEffect(()=>{
  typerRef.current.scrollIntoView();
},[messages])

let prevUser;
const list = messages.map(msg => {
  const line = <ChatMessage key={msg.timestamp} {...msg} prevUser={prevUser}/>
  prevUser = msg.user;
  return line
});
 
const typerList = typers.length > 1 ? `${typers.join(', ')} are typing` : `${typers[0]} is typing`;

return (<div className='chatList'>
  <div>
    { list }
  </div>
  <div ref={typerRef}>
    {typers.length > 0 ? typerList : null}
  </div>
</div>)
};


export default ChatList;