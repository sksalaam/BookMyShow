import "./movieTitle.scss";
export const MovieTitle = ({ movie = {} }) => {
  return (
  <div className="wrapper">
    <div className="movie-details container">
      <div className="title">
        <h1 className="title-text">
          {movie.name} - {movie.language ? movie.language.join(", ") : ""}
        </h1>
      </div>
      <div className="">
        <h6>
        <span class="badge text-bg-secondary us-badge me-5">UA</span>
          {movie.movieGenre &&
            movie.movieGenre.map((data, index) => (
              <span key={index} className="badge text-bg-secondary genre-badge">
                {data}
              </span>
            ))}
        </h6>
      </div>
    </div>
    </div>
  )
};
