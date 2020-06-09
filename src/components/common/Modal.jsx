import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { modalAnimation } from '../../styles/modalAnimation';

const ModalContainer = styled.div`
    display: ${props => props.show ? '' : 'none'}; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

const ModalContent = styled.div`
    position:absolute;
    top: ${props => props.top <= 40 ? props.top + 40 : props.top};
    left: ${props => props.left};
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 0.5rem;
    background-color:  ${props => props.theme.backgrounds.light};
    border-radius: 1rem;
    width: 70%;
    min-height: 20%;
    animation: ${modalAnimation} 2s linear;
`
const Modal = ({ show, onHover, coordinates, children }) => {
    const { top, left } = coordinates;
    return <ModalContainer show={show}>
        <ModalContent
            top={top}
            left={left}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}>
            {children}
        </ModalContent>
    </ModalContainer>
}

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    onHover: PropTypes.func.isRequired,
    coordinates: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
}
export default Modal;