import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ChatFooter from './components/ChatFooter';
import ChatBody from './components/ChatBody';
import MessageHistoryContext from '../../context/MessageHistory';
import { useChatService } from '../../helpers/useChatService';

const ChatWindowWrapper = styled.div`
    display:flex;
    flex-direction:column;
    flex-grow:1;
    overflow:auto;
    padding: 5px 0;
    background-color: ${props => props.theme.backgrounds.light};
    ::-webkit-scrollbar {
        width: 0;
    }
`
const ChatWindow = () => {
    const { cacheStatus } = useContext(MessageHistoryContext);
    const { messages, typers, sendMsg } = useChatService({ cacheStatus });

    return (<ChatWindowWrapper>
        <ChatBody messageList={messages} typersList={typers} />
        <ChatFooter sendMessage={sendMsg} />
    </ChatWindowWrapper>)
}

ChatWindow.propTypes = {

}

export default ChatWindow;