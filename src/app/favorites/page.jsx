"use client"
import React, { useContext } from 'react'
import { DefaultPageLayout } from '@/components/DefaultPageLayout'
import { MealsContext } from '@/context/MealsContext'
import styled from 'styled-components';
import RecipeFavoriteCard from '@/components/RecipeFavoriteCard';

const FavoritedList = styled.ul`	
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      margin-top: 20px;
      text-align: center;
    }

    gap: 15px;

    @media screen and (min-width: 768px) {
      display: grid;
      justify-items: center;

      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1280px) {
      grid-template-columns: repeat(3, 1fr);
    }
`
function Page() {
    const { favoriteRecipes } = useContext(MealsContext);

  return (
    <DefaultPageLayout>
      <div>
        <FavoritedList>
          {favoriteRecipes?.length === 0 ? (
            <h3>Você não possui receitas favoritas</h3>
          ) : (
            favoriteRecipes?.map((favorite) => (
              <RecipeFavoriteCard
                key={favorite.idMeal}
                recipe={favorite}
              />
            ))
          )}
        </FavoritedList>
      </div>
    </DefaultPageLayout>
  );
}

export default Page