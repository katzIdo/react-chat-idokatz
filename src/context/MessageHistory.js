import { createContext } from 'react';

const MessageHistoryContext = createContext({
    cacheStatus : false,
    setCacheStatus : () => null
})

export default MessageHistoryContext;