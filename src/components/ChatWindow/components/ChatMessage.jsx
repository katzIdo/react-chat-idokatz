import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { convertTimestamp } from '../../../helpers/convertTimestamp';
import Modal from '../../common/Modal';

const MessageWrapper = styled.div`
    margin-top: ${props => props.isFollow ? '0.1rem' : '0.5rem'};
    margin-left: 1rem;
    margin-right: 1rem;
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
const MessageModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    line-height:1.5rem;
    margin: 1rem 1rem 0 1rem;
`

const Line = styled.div`
  line-height:1.5rem;
  font-size:1rem;
`
const ChatMessage = ({ id, content, getFullContent, timestamp, user, lastUser, onHover }) => {
    const [isHover, setIsHover] = useState(false);
    const [coordinates, setCoordinates] = useState({ top: 0, left: 0 })
    const messageRef = useRef(null);

    const isFollow = user === lastUser;

    useEffect(() => {
        if (messageRef) {
            const elData = messageRef.current.getBoundingClientRect();
            setCoordinates({ top: elData.top - 15, left: elData.left - 15 });
        }
    }, [isHover])


    const header = !isFollow ? <MessageHeader>{user}</MessageHeader> : null;

    const handleHover = (status) => {
        onHover(status);
        setIsHover(status);
    }

    const fullText = () => {
        const fullText = getFullContent({ key: id });
        const lines = fullText.split('<br>');
        return lines ? lines.map((text, i) => <Line key={i}>{text}</Line>) : fullText;
    }

    return (
        <>
            <Modal show={isHover} onHover={handleHover} coordinates={coordinates}>
                <MessageModal>
                    <MessageHeader>{user}</MessageHeader>
                    <MessageContent>{fullText()}</MessageContent>
                </MessageModal>
            </Modal>
            <MessageWrapper
                ref={messageRef}
                isHover={isHover}
                className={user === 'Me' ? 'self' : ''}
                isFollow={isFollow}
                key={id}
                onMouseEnter={() => handleHover(true)}
            >
                {header}
                <MessageContent>{content}</MessageContent>
                <MessageTime>{convertTimestamp(timestamp)}</MessageTime>

            </MessageWrapper>

        </>)
};

ChatMessage.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    getFullContent: PropTypes.func.isRequired,
    timestamp: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    lastUser: PropTypes.string.isRequired,
    onHover: PropTypes.func.isRequired,
}

export default ChatMessage