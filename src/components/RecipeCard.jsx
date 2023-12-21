import React from 'react'
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const Card = styled.div`
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    width: 300px;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        transition: 0.5s;
        z-index: 1;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }

    border: solid 1px var(--border-grey);
    border-radius: 10px;
    text-align: left;

    img {
        width: 300px;
        height: 300px;
        border-radius: 10px 10px 0px 0px;
    }

    h3 {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%
        color: black;
        margin: 10px;
    }
`

function RecipeCard({ recipe }) {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(`/recipe?id=${recipe.idMeal}`);
  }

  return (
    <Card onClick={ handleNavigate }>
        <img src={ recipe.strMealThumb }/>
        <h3>{ recipe.strMeal }</h3>
    </Card>
  )
}

export default RecipeCard