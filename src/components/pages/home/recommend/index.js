import "./list.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import {movieList} from '../../../../assets/data/movie'

export const MoviesList = () => {
  const navigate = useNavigate();

  const handleGoMovieDetail=(id)=>{
    navigate('/movieDetail/'+id)
  }

  return (
    <>
      <div className="container p-3 ps-5 liveEventsContainer">
        <h3>Recommended Movies</h3>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={5}
          spaceBetween={10}
          slidesPerGroup={5}
        >
          {movieList.map((movie) => (
            <SwiperSlide>
              <div className="card" onClick={()=>handleGoMovieDetail(movie.id)}>
                <img src={movie.cardImg} className="card-img-top" />

                <div className="card-body">
                  <h5 className="card-title">{movie.name}</h5>
                  <p>{movie.movieGenre}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
