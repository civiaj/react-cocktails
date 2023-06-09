import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetByIdQuery } from '../store/cocktailsApi';

const DrinkInfo = () => {
  const params = useParams();
  const searchQuery = params.id;

  const { data: drinkData, isLoading, isError } = useGetByIdQuery(searchQuery);

  const drink = drinkData && drinkData.drinks ? drinkData.drinks[0] : false;

  let ingredients = [];

  if (drink) {
    ingredients = Object.entries(drink)
      .map((e) => {
        const [propertyName, propertyValue] = e;
        if (propertyName.toLowerCase().includes('ingredient') && propertyValue)
          return propertyValue;
      })
      .filter((e) => e !== undefined);
  }

  return (
    <>
      <div className="db-details">
        {isLoading && (
          <div className="loader-container">
            <span className="loader"></span>
          </div>
        )}
        {drink && (
          <div className="db-details__container">
            <div className="db-details__img-container">
              <img className="db-details__img" src={drink.strDrinkThumb}></img>
            </div>
            <div className="db-details__text-container">
              <p className="db-details__category">
                <span className="db-details__category-name">Name:</span>
                <span className="db-details__details">{drink.strDrink}</span>
              </p>
              <p className="db-details__category">
                <span className="db-details__category-name">Category:</span>
                <span className="db-details__details">{drink.strCategory}</span>
              </p>
              <p className="db-details__category">
                <span className="db-details__category-name">Info:</span>
                <span className="db-details__details">{drink.strAlcoholic}</span>
              </p>
              <p className="db-details__category">
                <span className="db-details__category-name">Glass:</span>
                <span className="db-details__details">{drink.strGlass}</span>
              </p>
              <p className="db-details__category">
                <span className="db-details__category-name">Instructions:</span>
                <span className="db-details__details">{drink.strInstructions}</span>
              </p>
              <p className="db-details__category">
                <span className="db-details__category-name">Ingredients:</span>
                {ingredients.map((ingredient, i) => (
                  <span className="db-details__details" key={i}>
                    {ingredient + ' '}
                  </span>
                ))}
              </p>
            </div>
          </div>
        )}
      </div>
      {(isError || !drink) && !isLoading && (
        <div style={{ textAlign: 'center' }}>Something went wrong</div>
      )}
    </>
  );
};

export default DrinkInfo;
