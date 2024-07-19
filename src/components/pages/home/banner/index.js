import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./banner.scss"
export const HomeBanner = () => {
const bannerImg=[
  {
    bannerImg:'https://assets-in.bmscdn.com/promotions/cms/creatives/1719294100427_u1chennaiandcoimbatoreshowcasebannerswebshowcase1240x300.jpg'
  },
  {
    bannerImg:'https://assets-in.bmscdn.com/promotions/cms/creatives/1720177103173_offeroftheweekwebnew.jpg'
  },
  {
    bannerImg:'https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg'
  },
  {
    bannerImg:'https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg'
  }
]

  return (
      <div className="container-fluid bann">
      <Swiper
        spaceBetween={10}
        slidesPerView={1.3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        {bannerImg.map((banner)=> 
        <SwiperSlide>
          <img className="img-fluid rounded" src={banner.bannerImg} />
        </SwiperSlide> )}
       </Swiper>     
      </div>
      
     
  );
};