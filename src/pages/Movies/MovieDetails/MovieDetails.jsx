import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getFilmById } from 'services/api';
import { useEffect, useRef, useState } from 'react';
import { isEmpty } from 'lodash';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const [filmInfo, setFilmInfo] = useState({});

  const location = useLocation();
  const goBackHref = useRef(location.state?.from || '/');

  useEffect(() => {
    try {
      getFilmById(movieId).then(res => setFilmInfo(res));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  let source = '';
  if (!filmInfo.poster_path) {
    source =
      'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
  } else source = `https://image.tmdb.org/t/p/w500/${filmInfo.poster_path}`;

  return (
    <>
      <Link to={goBackHref.current}>Go back ←</Link>
      {!isEmpty(filmInfo) && (
        <>
          <div>
            <img src={source} alt="poster" width="300px" />
            <div>
              <h1>
                {filmInfo.title} ({filmInfo.release_date.slice(0, 4)})
              </h1>
              <p>User score: {Math.round(filmInfo.vote_average * 10) + '%'}</p>
              <b>Overview</b>
              <p>{filmInfo.overview}</p>
              <b>Genres</b>
              <p>{filmInfo.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </div>
          <div>
            <b>Additional information</b>
            <ul>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>

            <Outlet />
          </div>
        </>
      )}
    </>
  );
};
