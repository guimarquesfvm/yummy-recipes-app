import { useQuery } from "@tanstack/react-query";

const fetcher = async (id) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data;
}

export function useRecipe(id) {
    const { data: recipe } = useQuery({
        queryFn: () => fetcher(id),
        queryKey: ['recipe', id],
        enabled: !!id
    })

    return recipe?.meals[0];
}