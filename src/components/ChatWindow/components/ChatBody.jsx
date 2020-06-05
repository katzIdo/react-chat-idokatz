import React, { useRef, useEffect } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import ChatMessage from './ChatMessage';

const ChatBodyWrapper = styled.div`
    flex-grow:1;
    display: flex;
    flex-direction: column;
`
const ChatBodyMessageWrapper = styled.div`
    flex-grow:1;
    display: flex;
    flex-direction: column;
    overflow: auto;
`

const TypersLine = styled.div`
    font-style: italic;
    color:  ${props => props.theme.colors.dark};
    font-size: 0.6rem;
    font-weight: 700;
    line-height: 1rem;
    height: 1rem;
`

const ChatBody = ({ messageList, typersList }) => {
    let lastUser = '';
    const messages = messageList.map((msg) => {
        const message = <ChatMessage key={msg.id} {...msg} lastUser={lastUser} />
        lastUser = msg.user;
        return message;
    });

    const typersLineRef = useRef(null);
    useEffect(() => {
        if (!typersLineRef) return;

        typersLineRef.current.scrollIntoView({behavior: "smooth"});
    }, [messageList])

    return <ChatBodyWrapper>
        <ChatBodyMessageWrapper>
            {messages}
        </ChatBodyMessageWrapper>
        <TypersLine ref={typersLineRef}>{typersList.join(', ')}</TypersLine>
    </ChatBodyWrapper>
}

ChatBody.propTypes = {
    messageList: propTypes.array,
    typersList: propTypes.array,
}
export default ChatBody;