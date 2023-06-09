import { useGetByLetterQuery } from '../store/cocktailsApi';
import { Link } from 'react-router-dom';

const List = ({ searchParams = 'a' }) => {
  const { data, isError, error, isLoading } = useGetByLetterQuery(searchParams);
  const renderList = data?.drinks ? [...data.drinks] : [];
  console.log(renderList);
  return (
    <div className="db-cocktails">
      <h3 className="db__h3">Cocktails</h3>
      {isLoading && (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      )}
      {isError && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          An error occured while fetching. Status: {error.status}.
        </div>
      )}
      <ul className="db-cocktails__list">
        {!!renderList.length &&
          renderList.map((item) => (
            <li key={item.idDrink} className="db-cocktails__item">
              <div className="db-cocktails__img-container">
                <img
                  className="db-cocktails__img"
                  alt={item.strDrink}
                  src={item.strDrinkThumb}
                ></img>
              </div>
              <div className="db-cocktails__text-container">
                <div className="db-cocktails__text-inner">
                  <div className="db-cocktails__name">{item.strDrink}</div>
                  <div className="db-cocktails__glass">{item.strGlass}</div>
                  <div className="db-cocktails__alc">{item.strAlcoholic}</div>
                </div>
                <div className="db-cocktails__btn-inner">
                  <button className="db-cocktails__btn">
                    <Link to={`details/${item.idDrink}`}>Details</Link>
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
      {!renderList.length && !isError && !isLoading && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          Sorry, but we don't have such a cocktail: '{searchParams}'!
        </div>
      )}
    </div>
  );
};

export default List;
