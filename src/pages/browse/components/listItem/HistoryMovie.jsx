import React, {useContext} from "react";
import { Context } from "../../../store/ProviderMovie";

const HistoryMovie = (props) => {
  const ctx = useContext(Context);

  const movieList = props.movieItem.filter(item => item.backdrop_path !== null);

  const handleRedirect = (movie) => {
    ctx.getMovieDetail(movie);
    ctx.setShowDetail(true);
  }
  return (
    <>
      <h3>Lịch Sử</h3>
      <section>
        {movieList.map((movie, index) => {
          return (
            <div key={index} onClick={handleRedirect.bind(null, movie)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.original_title}
              />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HistoryMovie;
