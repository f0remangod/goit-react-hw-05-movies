import { useState } from 'react';
import { useEffect } from 'react';
import { getTrendingFilms } from 'services/api';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  const location = useLocation();

  useEffect(() => {
    try {
      getTrendingFilms().then(res => setTrendingFilms([...res.results]));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1>Trending Films</h1>
      <ul>
        {trendingFilms.map(film => {
          return (
            <li key={film.id}>
              <Link to={`movies/${film.id}`} state={{ from: location }}>
                {film.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
