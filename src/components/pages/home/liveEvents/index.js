import './liveEvents.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export const LiveEvents = () => {
  const liveEventImg = [
    {
        liveEventImg:
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NSBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-amusement-park-collection-202404190106.png",
    },
    {
        liveEventImg:
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png",
    },
    {
        liveEventImg:
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-kids-collection-202404190106.png",
    },
    {
        liveEventImg:
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NDArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png",
    },
    {
        liveEventImg:
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MjUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png",
    },
    {
        liveEventImg:
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTAgRXZlbnRz,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/theatre-shows-collection-202211140440.png",
    },   
  ];

  return (
    <>
      <div className="container mt-5 liveEventsContainer">
          <h3 className='heading3'>The Best Of Live Events</h3>
       
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={5} spaceBetween={10}
       breakpoints={{
        320: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 5,
        
        },
        450:{
          slidesPerView: 3,
          spaceBetween: 1,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 5,
          slidesPerGroup: 3,
         
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}>
      
        {liveEventImg.map((liveEvent) => (
          <SwiperSlide >
            <div className="card">
              <img
                src={liveEvent.liveEventImg}
                className="card-img-top"
              />
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
};
