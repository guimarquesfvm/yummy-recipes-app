"use client";
import { useQuery } from '@tanstack/react-query';
import { useFilter } from './useFilter';
import { useDeferredValue } from 'react';

const fetcher = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data[Object.keys(data)[0]];
}

const mountQuery = (filterType) => {
    if (filterType === 'All') return `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
    return `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filterType}`;
}

export function useRecipes() {
    const { filterType } = useFilter();
    const { searchTerm } = useFilter();

    const data = useQuery({
        queryFn: () => fetcher(mountQuery(filterType)),
        queryKey: ['recipes', filterType],
    });

    const filteredData = useDeferredValue(data.data?.filter((item) => item.strMeal.toLowerCase().includes(searchTerm.toLowerCase())));

    return { data: filteredData };
}

