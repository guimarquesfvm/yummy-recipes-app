"use client";
import { useRecipes } from '@/hooks/useRecipes';
import React from 'react';
import RecipeCard from './RecipeCard';
import styled from 'styled-components';
import { useFilter } from '@/hooks/useFilter';

const ListContainer = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1500px;
    justify-items: center;
`;

function RecipesList() {
    const { data } = useRecipes();
    return (
        <ListContainer>
            {data?.map((recipe) => (
                <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))}
        </ListContainer>
    )
}

export default RecipesList;