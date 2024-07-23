import { movieList } from "../../assets/data/movie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './genericSearch.scss';

export const GenericSearch = () => {
  const navigate = useNavigate();
  const [filteredMovieList, setFilteredMovieList] = useState([]);
  const [searchInput, setSearchInput] = useState([]);

  const handleGoMovieDetail = (id) => {
    setFilteredMovieList([]);
    setSearchInput('')
    navigate("/movieDetail/" + id);
  };


  const onChange = (e) => {
    const value = e.target.value;
    setSearchInput(value)
    const list =
      value.length > 0
        ? movieList.filter((data) =>
            data.name.toLowerCase().includes(value.toLowerCase())
          )
        : [];
    setFilteredMovieList(list);
  };
  return (
    <div className="search-container">
      <form className="d-flex search-bar" role="search">
        <div className="input-group">
          <span className="input-group-text bg-transparent">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search for Movies"
        value={searchInput}
            onChange={onChange}
          />
        </div>
      </form>
      <ul class="list-group searchResult">
        {filteredMovieList.map((movie) => (
          <li
            class="list-group-item"
            onClick={() => handleGoMovieDetail(movie.id)}
          >
            {movie.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
