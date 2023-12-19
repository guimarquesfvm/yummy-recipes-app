"use client";
import { useQuery } from '@tanstack/react-query';

const fetcher = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    const data = await response.json();
    return data[Object.keys(data)[0]];
}
export function useRecipes() {
    const data = useQuery({
        queryFn: fetcher,
        queryKey: ['recipes'],
    });

    return data;
}

