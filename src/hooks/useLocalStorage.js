import { useState } from 'react';
export function useLocalStorage(key) {
    const [storedValue, setStoredValue] = useState(JSON.parse(localStorage.getItem(key) || ''));
    const setValue = (value) => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue, setValue];
}