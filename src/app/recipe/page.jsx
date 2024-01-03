"use client";
import BackButton from "@/components/BackButton";
import { DefaultPageLayout } from "@/components/DefaultPageLayout";
import { useRecipe } from "@/hooks/useRecipe";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FavoriteButton from "@/components/FavoriteButton";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 100%;

        img {
            width: 100%;
            border-radius: 10px;
            margin: 10px auto;
            max-width: 400px;
            height: auto;
        }
        .favorite-btn-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            h1 {
                font-size: 2rem;
                font-weight: 700;
                color: black;
                line-height: 150%;
            }

            svg {
              width: 24px;
              height: 24px;
              cursor: pointer;

              &:hover {
                transform: scale(1.15);
                transition: 0.5s;
                z-index: 1;
              }
            }
        }


        h2 {
            margin-top: 20px;
        }
        
        ul {
            margin-top: 20px;
            list-style: none;
            padding: 15px;
            border-radius: 10px;
            border: 1px solid var(--border-grey);
            width: 100%;
        }
        p {
            margin-top: 20px;
            padding: 15px;
            border-radius: 10px;
            border: 1px solid var(--border-grey);
            width: 100%;
        }
        
        iframe {
          width: 100%;
          aspect-ratio: 16/9;
          margin: 20px 0;
          border-radius: 10px;
          border: 1px solid var(--border-grey);
          width: 100%;
          max-width: 600px;
        }
    }

    @media (min-width: 768px) {
      section {
        align-items: center;
        gap: 20px;
        padding: 0 40px;
        .image-and-ingredients-container {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 20px;
            img {
              width: 50%;
              margin: 0;
            }

            div {
              display: flex;
              flex-direction: column;
            }

            .favorite-btn-container {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
            }
          }
        }
      }
    }
    @media (min-width: 1024px) {
      .instructions-and-video-container {
        * {
          margin: 0;
          gap: 10px;
        }
        width: 100%;
        max-width: 800px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        gap: 20px;
        border: solid 1px var(--border-grey);
        border-radius: 10px;
        padding: 20px;
        
        .instructions-container {
          width: 50%;
          flex-stretch: 99;

          p {
            border: none;
          }
        }
        .video-container {
          width: 50%;
          display: flex;
          flex-direction: column;
        }
      }
    }
`;

function Recipe({ searchParams }) {
  const recipe = useRecipe(searchParams.id);

  const [ingredients, setIngredients] = useState([]);
  const [measurements, setMeasurements] = useState([]);

  // separating ingredients and measurements from recipe, bad response design from API.

  useEffect(() => {
    if (!recipe) return;
    setIngredients(
      Object.entries(recipe).filter(
        (e) => e[0].includes("strIngredient") && e[1] !== null && e[1] !== ""
      )
    );
    setMeasurements(
      Object.entries(recipe).filter(
        (e) => e[0].includes("strMeasure") && e[1] !== null && e[1] !== ""
      )
    );
  }, [recipe]);

  return (
    <DefaultPageLayout>
      <Container>
        <BackButton navigate={"/"} />
        <section>
          <div className="image-and-ingredients-container">
            <img src={recipe?.strMealThumb} alt={`${recipe?.strMeal} photo`} />
            <div>
              <div className="favorite-btn-container">
                <h1>{recipe?.strMeal}</h1>
                <FavoriteButton recipe={recipe} />
              </div>
              <span>{recipe?.strCategory}</span>

              <h2>Igredients</h2>
              <ul>
                {ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {measurements[index][1] ?? ""} {ingredient[1] ?? ""}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="instructions-and-video-container">
            <div className="instructions-container">
              <h2>Instructions</h2>
              <p>{recipe?.strInstructions}</p>
            </div>
            <div className="video-container">
              <h2>Video</h2>
              <iframe
                src={recipe?.strYoutube.replace("watch?v=", "embed/")}
                title="instructions video"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </Container>
    </DefaultPageLayout>
  );
}

export default Recipe;
