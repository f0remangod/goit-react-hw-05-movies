import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/api';

export const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);

  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query') ?? '';

  const location = useLocation();

  const handleFormSubmit = searchQueryFromForm => {
    setSearchQuery(
      searchQueryFromForm !== '' ? { query: searchQueryFromForm } : {}
    );
  };

  useEffect(() => {
    if (query) {
      try {
        getMovieByQuery(query).then(res => {
          setSearchResults([...res.results]);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [query]);

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit}></SearchForm>
      {searchResults.length > 0 && (
        <p>
          Search results for keyword <em>{query}</em>:
        </p>
      )}
      <ul>
        {searchResults.map(film => {
          return (
            <li key={film.id}>
              <Link to={`${film.id}`} state={{ from: location }}>
                {film.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
