import React, { useCallback, useState, useEffect } from 'react';

const TYPER_TIMER = 4000;

export const useChatService = () => {
    if (!window.Chat) {
        throw Error('chat not avilable');

    }

    const [typers, setTypers] = useState([]);
    const [messages, setMessages] = useState([]);

    const timers = {};
    const clearTyper = useCallback((user) => {
        const index = typers.indexOf(user);
        if (index !== -1) {
            clearTimeout(timers[user]);
            const newUser = [...typers];
            newUser.splice(index, 1);
            setTypers(newUser)
        }
    }, [typers, timers]);

    const sendMsg = useCallback((msg) => {
        window.Chat.sendMessage(msg);
    }, []);

    useEffect(() => {
        window.Chat.onTyping((user) => {
            if (typers.indexOf(user) === -1) {
                setTypers([...typers, user]);
            }
            clearTimeout(timers[user]);
            timers[user] = setTimeout(() => {
                clearTyper(user);
            }, TYPER_TIMER);
        });
    }, [typers, timers, clearTyper]);

    useEffect(() => {
        window.Chat.onMessage((msg) => {
            clearTyper(msg.user);
            setMessages([...messages, msg]);
        });
    }, [messages, typers, clearTyper]);

    useEffect(() => {
        const raw = localStorage.getItem('msgHistory');
        raw && setMessages(JSON.parse(raw));
    }, [])

    useEffect(() => {
        localStorage.setItem('msgHistory', JSON.stringify(messages));
    }, [messages]);

    return {
        sendMsg,
        typers,
        messages
    }
}