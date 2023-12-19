import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
    display: flex;]
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 300px;
    
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
  return (
    <Card>
        <img src={ recipe.strMealThumb }/>
        <h3>{ recipe.strMeal }</h3>
    </Card>
  )
}

export default RecipeCard