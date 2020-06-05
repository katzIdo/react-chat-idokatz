import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import ChatFooter from './components/ChatFooter';
import ChatBody from './components/ChatBody';
import { useChatService } from '../../helpers/useChatService';

const ChatWindowWrapper = styled.div`
    display:flex;
    flex-direction:column;
    height:100vh;
    overflow:auto;
    background-color: ${props => props.theme.backgrounds.light};
    ::-webkit-scrollbar {
        width: 0;
    }
`
const ChatWindow = () => {

    const { messages, typers, sendMsg } = useChatService();

    return (<ChatWindowWrapper>
        <ChatBody messageList={messages} typersList={typers} />
        <ChatFooter sendMessage={sendMsg} />
    </ChatWindowWrapper>)
}

ChatWindow.propTypes = {

}

export default ChatWindow;