import React from 'react'
import styled from 'styled-components';
import FavoriteButton from './FavoriteButton';
import { useRouter } from 'next/navigation';

const RecipeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
    border: 1px solid var(--border-grey);
    border-radius: 10px;
    
    &:hover {
        box-shadow: 0 0 10px var(--border-grey);
        transition: 0.3s;
        transform: scale(1.05);
    }
    img {
        width: 50%;
        border-radius: 10px 0 0 10px;
        cursor: pointer;
    }
    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: space-around;

        svg {
            cursor: pointer;
        }
    }

    @media screen and (min-width: 768px) {
        max-width: 360px;
    }
`
function RecipeFavoriteCard({ recipe }) {
    const router = useRouter();

  const handleNavigate = () => {
    router.push(`/recipe?id=${recipe.idMeal}`);
  }
  return (
    <RecipeContainer>
        <img src={ recipe.strMealThumb } alt={`${recipe.strMeal} photo`} onClick={ handleNavigate }/>
        <div>
            <div>
                <h2>{recipe.strMeal}</h2>
                <p>{recipe.strArea} - {recipe.strCategory}</p>
            </div>
            <FavoriteButton recipe={ recipe }/>
        </div>
    </RecipeContainer>
  )
}

export default RecipeFavoriteCard;