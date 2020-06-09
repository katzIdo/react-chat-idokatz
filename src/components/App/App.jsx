import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import StyleReset from '../../styles/reset';
import Theme from '../../styles/theme';
import ChatWindow from '../ChatWindow/ChatWindow';
import Header from '../Header/Header';

import MessageHistoryContext from '../../context/MessageHistory';

const AppStyle = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
`

const App = () => {
    const [cacheStatus, setCacheStatus] = useState(false);

    return (
        <ThemeProvider theme={Theme}>
            <StyleReset />
            <AppStyle>
                <MessageHistoryContext.Provider value={{cacheStatus, setCacheStatus}}>
                    <Header/>
                    <ChatWindow />
                </MessageHistoryContext.Provider>
            </AppStyle>
        </ThemeProvider>
    )
}

export default App;