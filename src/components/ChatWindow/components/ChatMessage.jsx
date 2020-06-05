import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { convertTimestamp } from '../../../helpers/convertTimestamp';

const MessageWrapper = styled.div`
    margin-top: ${props => props.isFollow ? '0.1rem' : '0.5rem'};
    padding: 0.5rem;
    background-color:  ${props => props.className === 'self' ? props.theme.backgrounds.primary : props.theme.backgrounds.secondary};
    border-radius: 1rem;
    width: 70%;
    align-self: ${props => props.className === 'self' ? 'flex-end' : 'flex-start'};
`
const MessageHeader = styled.div`
    font-size: 0.8rem;
    font-weight: 700;
`

const MessageContent = styled.div`
    margin: 0.5rem 0;
    padding: 0 0.5rem;
`

const MessageTime = styled.div`
    display:flex;
    flex-direction: row-reverse;
    font-size: 0.8rem;
    font-weight: 700;
`

const ChatMessage = ({ id, content, timestamp, user, lastUser }) => {
    const isFollow = user === lastUser;
    const header = !isFollow ? <MessageHeader>{user}</MessageHeader> : null
    return (
        <MessageWrapper className={user === 'Me' ? 'self' : ''} isFollow={isFollow} key={id}>
            {header}
            <MessageContent>{content}</MessageContent>
            <MessageTime>{convertTimestamp(timestamp)}</MessageTime>
        </MessageWrapper>)
};

ChatMessage.propTypes = {
    id : propTypes.string,
    content: propTypes.string, 
    timestamp : propTypes.number,
    user: propTypes.string, 
    lastUser: propTypes.string,
}

export default ChatMessage;