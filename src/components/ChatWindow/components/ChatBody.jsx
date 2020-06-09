import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ChatMessage from './ChatMessage';
import { useFullMessageContent } from '../../../helpers/useFullMessageContent';

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
    const [isHover, setIsHover] = useState(false);
    const handleMessageHover = useCallback((status) => {
        setIsHover(status);
    }, [setIsHover]);

    const { setFullContent, getFullContent } = useFullMessageContent();
    const messages = useMemo(() => {
        let lastUser = '';
        let fullContent = '';
        let fullContentKeys = [];
        return (
            <ChatBodyMessageWrapper>
                {messageList.map((msg) => {
                    if (lastUser === msg.user) {
                        fullContentKeys.push(msg.id);
                        fullContent = `${fullContent} <br>
                         ${msg.content}`
                    } else {
                        fullContentKeys = [msg.id];
                        fullContent = msg.content;
                    }
                    setFullContent({
                        keys: fullContentKeys,
                        data: fullContent
                    })


                    const message = <ChatMessage key={msg.id} {...msg} lastUser={lastUser} onHover={handleMessageHover} getFullContent={getFullContent} />
                    lastUser = msg.user;
                    return message;
                })}
            </ChatBodyMessageWrapper>
        )
    }, [messageList, handleMessageHover]);

    const typersLineRef = useRef(null);
    useEffect(() => {
        if (!typersLineRef || isHover) return;

        typersLineRef.current.scrollIntoView({ behavior: "smooth" });
    }, [messageList, isHover])

    return <ChatBodyWrapper>
        {messages}
        <TypersLine ref={typersLineRef}>{typersList.join(', ')}</TypersLine>
    </ChatBodyWrapper>
}

ChatBody.propTypes = {
    messageList: PropTypes.array.isRequired,
    typersList: PropTypes.array.isRequired,
}
export default ChatBody;