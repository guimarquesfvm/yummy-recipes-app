import React, { useContext } from "react";
import { MealsContext } from "@/context/MealsContext";
import FavoriteButtons from "@/assets/icons/FavoriteButtons";

function FavoriteButton({ recipe }) {
    const { handleFavorite, isFavorited } = useContext(MealsContext);
  return (
    <div onClick={() => handleFavorite(recipe)}>
      {isFavorited(recipe) ? (
        <FavoriteButtons.FavoriteFilled />
      ) : (
        <FavoriteButtons.FavoriteNotFilled />
      )}
    </div>
  );
}

export default FavoriteButton;
