import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'services/api';
import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';

const Reviews = () => {
  const { movieId } = useParams();

  const [filmReviews, setFilmReviews] = useState([]);

  useEffect(() => {
    try {
      getMovieReviews(movieId).then(res => setFilmReviews(res.results));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <>
      {isEmpty(filmReviews) ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul>
          {filmReviews.map(review => {
            return (
              <li key={review.id}>
                <b>{review.author}</b>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
