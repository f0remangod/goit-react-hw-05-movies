import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'services/api';
import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';

const Cast = () => {
  const { movieId } = useParams();

  const [filmCast, setFilmCast] = useState([]);

  useEffect(() => {
    try {
      getMovieCredits(movieId).then(res => setFilmCast(res.cast.splice(0, 11)));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <>
      {isEmpty(filmCast) ? (
        <p>We don't have any informationabout cast for this movie</p>
      ) : (
        <>
          <ul>
            {filmCast.map(actor => {
              let source = '';
              if (!actor.profile_path) {
                source =
                  'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg';
              } else
                source = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
              return (
                <li key={actor.id}>
                  <img src={source} alt={`${actor.name}`} width="30px" />
                  {actor.name}
                  <br />
                  as {actor.character}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};

export default Cast;
