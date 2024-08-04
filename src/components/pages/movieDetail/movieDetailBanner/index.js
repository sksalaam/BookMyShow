import "./movieDetailBanner.scss";
import { useNavigate } from "react-router-dom";

export const MovieDetailsBanner = ({ movieDetail = {} }) => {
  const navigate = useNavigate();
  const bookticket =(id)=>{
    navigate('/seatBooking/'+id)

  }
  return (
    <div className="wrapper">
      <section className="bannerContainer">
        <div
          className="bannerContent"
          style={{
            backgroundImage: `linear-gradient(
        90deg,
        rgb(26, 26, 26) 24.97%,
        rgb(26, 26, 26) 38.3%,
        rgba(26, 26, 26, 0.04) 97.47%,
        rgb(26, 26, 26) 100%
      ), url(${movieDetail.bannerImg})`,
          }}
        >
          <div className="container ">
            <div className="row">
              <div className="col-9">
                <div class="movieDetailCon">
                  <div class="flex-shrink-0 imgContainer">
                    <div className="cardContainer">
                      <img
                        className="cardImg"
                        src={movieDetail.cardImg}
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1 infoContainer">
                    <h1 className="text-white m-0">{movieDetail.name}</h1>
                    <section className="reviewSec">
                      <div className="reviewDiv">
                        <div className="ratingsDiv">
                          <i className="fa-regular fa-star text-white"></i>
                          <h5 className="text-white rating">
                            {movieDetail.rating}/10
                          </h5>
                          <h6 className="text-white votes">
                            ({movieDetail.votes} Votes)
                          </h6>
                        </div>
                        <button className="rateNow">
                          <span className="btnSpan">Rate Now</span>
                        </button>
                      </div>
                    </section>
                    <div className="eventAttributesWrapper">
                      <div className="eventAttributesContainer">
                        <div className="mb-2">
                          <div className="linkedElementsContainer">
                            <a href="">{movieDetail.movieExplore}</a>
                          </div>
                        </div>
                        <div>
                          <div className="linkedElementsContainer2">
                          <a href="">{movieDetail.language ? movieDetail.language.join(', ') : ''}</a>

                          </div>
                        </div>
                      </div>
                      <div className="eventAttributesContainer2">
                        {movieDetail.timePeriod}
                        <span className="pe-2 ps-2"> • </span>
                        <a href="" className="genre">
                          {movieDetail.movieGenre ? movieDetail.movieGenre.join(', '): ''}
                        </a>
                        <span className="pe-2 ps-2"> • </span>
                        UA
                        <span className="pe-2 ps-2"> • </span>
                        {movieDetail.date}
                      </div>
                      <div className="bookTicketBtnWrapper">
                        <div className="bookTicketBtnContainer">
                          <button className="bookTicketBtn" onClick={()=>bookticket(movieDetail.id)}>
                            Book tickets
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 text-end">
                <div className="sharebtnWrapper">
                  <div className="sharebtnContainer">
                    <div className="shareIcon">
                      {" "}
                      <i class="fa-solid fa-share-nodes"></i>
                    </div>
                    <div className="shareTxt"> Share</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
