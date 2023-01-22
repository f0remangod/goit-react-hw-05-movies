import { Container } from 'components/Container/Container';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/api';

const Movies = () => {
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
      <Container>
        <SearchForm onSubmit={handleFormSubmit}></SearchForm>

        {searchResults.length === 0 && query !== '' && (
          <p>The search has not given any results</p>
        )}

        {searchResults.length > 0 && (
          <h1>
            Search results for keyword <em>{query}</em>:
          </h1>
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
      </Container>
    </>
  );
};

export default Movies;
