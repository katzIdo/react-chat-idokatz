import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';

import SwitchButton from '../common/SwitchButton';
import MessageHistoryContext from '../../context/MessageHistory';

const HeaderStyle = styled.div`
    padding: 15px 0;
    background-color: ${props => props.theme.backgrounds.light}
`
const BreakLine = styled.div`
margin: 0.2rem 1rem;
padding: 0.5px 0;
    background-color: ${props => props.theme.backgrounds.black}
`;


const Header = () => {
    const { cacheStatus, setCacheStatus } = useContext(MessageHistoryContext);
    const handleChange = useCallback((status) => {
        setCacheStatus(status);
    }, [setCacheStatus]);

    return (
        <HeaderStyle>
            <SwitchButton
                checked={cacheStatus}
                onChange={handleChange}
                title='Cache' />
            <BreakLine />
        </HeaderStyle>
    )
}

export default Header;