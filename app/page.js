"use client"

import { useCompletion } from "@ai-sdk/react";
import { useState, useEffect, useCallback, useRef } from "react";
import Component from '../components/ui/component';

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

export default function Page() {
    const { completion, input, handleInputChange, handleSubmit } = useCompletion();
    const [history, setHistory] = useState([]);
    const [lastInput, setLastInput] = useState('');
    const previousCompletionRef = useRef('');

    // Load history from localStorage on client side
    useEffect(() => {
        const savedHistory = localStorage.getItem('history');
        if (savedHistory) {
            setHistory(JSON.parse(savedHistory));
        }
    }, []);

    // Effect to update localStorage whenever history changes
    useEffect(() => {
        if (history.length > 0) {
            localStorage.setItem('history', JSON.stringify(history));
        }
    }, [history]);

    const debouncedUpdateHistory = useCallback(
        debounce((newCompletion, newInput) => {
            if (newCompletion && newCompletion !== previousCompletionRef.current) {
                setHistory((prevHistory) => [...prevHistory, { question: newInput, answer: newCompletion }]);
                previousCompletionRef.current = newCompletion;
            }
        }, 1000),
        []
    );

    useEffect(() => {
        debouncedUpdateHistory(completion, lastInput);
    }, [completion, lastInput, debouncedUpdateHistory]);

    const handleSubmitWithLogging = async (event) => {
        event.preventDefault();
        setLastInput(input);
        await handleSubmit(event);
    };

    return (
        <div className="container">
            <Component 
                handleSubmit={handleSubmitWithLogging} 
                handleInputChange={handleInputChange} 
                input={input} 
                completion={completion}
                history={history}
            />
        </div>
    );
}
