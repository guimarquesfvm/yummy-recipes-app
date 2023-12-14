"use client";
import { createContext, useState } from 'react';

export const MealsContext = createContext({
    filterType: '',
    setFilterType: () => {},
    searchTerm: '',
    setSearchTerm: () => {},
})

export const MealsProvider = ({children}) => {
    const [filterType, setFilterType] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <MealsContext.Provider value={
            {
                filterType,
                setFilterType,
                searchTerm,
                setSearchTerm,
            }
        }>
            {children}
        </MealsContext.Provider>
    )
}