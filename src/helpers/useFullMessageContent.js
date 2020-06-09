import {useState, useCallback} from 'react';

export const useFullMessageContent = () => {
    const [contents, setContents] = useState({});
    const setFullContent = useCallback(({keys = [], data = ''})=>{
        keys.forEach(key=>{
            contents[key] = data;
        });
        setContents({...contents});
    },[contents]);

    const getFullContent = useCallback(({key})=>{
        return contents[key];
    },[contents]);

    return {
        setFullContent,
        getFullContent
    }
}