"use client";
import { createContext, useState } from 'react';

export const MealsContext = createContext({
    filterType: '',
    setFilterType: () => {},
    searchTerm: '',
    setSearchTerm: () => {},
})

export const MealsProvider = ({children}) => {
    const [filterType, setFilterType] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [favoriteRecipes, setFavoriteRecipes] = useState(typeof window ==! "undefined" && JSON.parse(localStorage.getItem('favoriteRecipes')) || []);

    // return true if recipe is already favorited
    const isFavorited = (recipe) => favoriteRecipes.some((r) => r.idMeal === recipe?.idMeal);

    const handleFavorite = (recipe) => {
        let newFavoriteRecipes = [];

        if (isFavorited(recipe)) {
            // Remove from favorites
            newFavoriteRecipes = favoriteRecipes.filter((r) => r.idMeal !== recipe.idMeal);
            // Update state
            setFavoriteRecipes(newFavoriteRecipes);
            // Update local storage
            localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipes));
        } else {
            // Add to favorites
            newFavoriteRecipes = [...favoriteRecipes, recipe];
            // Update state
            setFavoriteRecipes(newFavoriteRecipes);
            // Update local storage
            localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipes));
        }
    }

    return (
        <MealsContext.Provider value={
            {
                filterType,
                setFilterType,
                searchTerm,
                setSearchTerm,
                favoriteRecipes,
                setFavoriteRecipes,
                isFavorited,
                handleFavorite,
            }
        }>
            {children}
        </MealsContext.Provider>
    )
}