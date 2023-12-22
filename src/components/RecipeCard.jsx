import React, { useContext } from 'react'
import { MealsContext } from '@/context/MealsContext';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import FavoriteButtons from '../assets/icons/FavoriteButtons';

const Card = styled.div`
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    width: 300px;

    &:hover {
        transform: scale(1.05);
        transition: 0.5s;
        z-index: 1;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    }

    border: solid 1px var(--border-grey);
    border-radius: 10px;
    text-align: left;

    img {
        width: 300px;
        height: 300px;
        border-radius: 10px 10px 0px 0px;
        cursor: pointer;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 10px;

      h3 {
          font-weight: 400;
          font-size: 16px;
          line-height: 150%
          color: black;
      }

      svg {
          cursor: pointer;
          width: 24px;
          height: 24px;
          z-index: 999;
      }
    }
`

function RecipeCard({ recipe }) {
  const { handleFavorite, isFavorited } = useContext(MealsContext);
  const router = useRouter();
  const handleNavigate = () => {
    router.push(`/recipe?id=${recipe.idMeal}`);
  }

  return (
    <Card>
        <img src={ recipe.strMealThumb } onClick={ handleNavigate } />
        <div>
          <h3>{ recipe.strMeal }</h3>
          <div onClick={ () => handleFavorite(recipe) } className='favorite-btn-container'>
            { isFavorited(recipe) ? <FavoriteButtons.FavoriteFilled /> : <FavoriteButtons.FavoriteNotFilled /> }
          </div>
        </div>
    </Card>
  )
}

export default RecipeCard