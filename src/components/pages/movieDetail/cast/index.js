import "./cast.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export const Cast = ({movieDetail={}}) => {
  return (
    <div className="castCrewInfo container mt-3">
        {movieDetail?.cast_crew?.map((element)=>
         <>
         <div className="row mt-3">
         <div className="col-12 p-0">
           <h5>{element.title}</h5>
         </div>
       </div>

       <div className="row">
        <div className="col-8">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={6} spaceBetween={1}>
        {element.data.map((cast)=>(
      
            <SwiperSlide>
               
          <div className="text-center">
            <img
              src={cast.img}
              className="castImg w-75"
            ></img>
            <p className="castNames"> {cast.name}</p>
          </div>
            </SwiperSlide>

        ))}
       
        </Swiper>
        </div>
      </div>
         </>
        )}
     
     
    </div>
  );
};
