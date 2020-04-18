import React from 'react';
import {convertTimestamp} from '../../helpers/convertTimestamp';

const ChatMessage = ({content, user, id, timestamp, prevUser}) => {
  
  return (<div>
  {(user !== prevUser) ? <div>{user}</div> : null}
    <div>{content}</div>
    <div>{convertTimestamp(timestamp)}</div>
  </div>)
}

export default ChatMessage;