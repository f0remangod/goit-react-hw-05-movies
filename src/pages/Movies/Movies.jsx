import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMovieByQuery } from 'services/api';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleFormSubmit = query => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (searchQuery !== '') {
      try {
        getMovieByQuery(searchQuery).then(res => {
          setSearchResults([...res.results]);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [searchQuery]);

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit}></SearchForm>

      <ul>
        {searchResults.map(film => {
          return (
            <li key={film.id}>
              <Link to={`${film.id}`}>{film.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
