import React, { useState, useEffect, useContext } from 'react'
import { ModalsContext } from './theme/ThemeProvider';
export function useWindowSize() {

    const isClient = typeof window === 'object';

    function getSize() {

        return {

            width: isClient ? window.innerWidth : undefined,

            height: isClient ? window.innerHeight : undefined

        };

    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return false;
        }
        function handleResize() {
            setWindowSize(getSize());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, []); // Empty array ensures that effect is only run on mount and unmount  
    return windowSize;

}

function getSavedValue(key, initialValue) {
    // const savedValue = JSON.parse(localStorage.getItem(key))
    const savedValue = localStorage.getItem(key)

    if (savedValue) return savedValue

    if (initialValue instanceof Function) return initialValue()
    return initialValue
}


export function useLocalStorage(key) {

    if (typeof window === 'undefined') return [null, null]

    if (!key) return;
    const [val, setValue] = useState(() => localStorage.getItem(key))


    useEffect(() => {
        if (key.includes('password')) return
        val !== null && localStorage.setItem(key, val)
    }, [val])

    return [val, setValue]

}


export function useCheck() {

    const { checking, setChecking } = useContext(ModalsContext)

    function requiresCheck(message, cb) {
        setChecking({ checking: true, message, cb })
    }


    return { requiresCheck }
}