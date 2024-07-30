import './premieres.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


export const Premieres =()=>{
    const premiereImg = [
        {
            premiereImg:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00403258-cqgsuuxcpy-portrait.jpg'
        },
        {
            premiereImg:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00402085-capgupyqyq-portrait.jpg'
        },
        {
            premiereImg:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00390798-knfbguzzyt-portrait.jpg'
        },
        {
            premiereImg:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00376330-wxswvcqpcr-portrait.jpg'
        },
        {
            premiereImg:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00377865-hphpmznmcj-portrait.jpg'
        },
        {
            premiereImg:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00402648-zcnnwmygbq-portrait.jpg'
        },
        {
            premiereImg:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00389947-hrsfxdhhkx-portrait.jpg'
        },
        {
            premiereImg:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00402900-zubxkghcey-portrait.jpg'
        },
        {
            premiereImg:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00402653-effzepvsxg-portrait.jpg'
        },
        {
            premiereImg:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00384056-hqjrfhffhq-portrait.jpg'
        }
    ]
   return(
    <>
    
    <div className="layout mt-5"> 
      <div className="container liveEventsContainer">
      <div >  
        <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png' className='premierImg container ' ></img>
    </div>
    <div className=" text-white">
          <h3 className='container h3cont'>Premieres</h3>
          <p className='container pcont'>Brand new releases every Friday</p>
       
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={5} spaceBetween={10} slidesPerGroup={5}>
      
        {premiereImg.map((premier) => (
          
          <SwiperSlide >
            <div className="card">
              <img
                src={premier.premiereImg}
                className="card-img-top"
              />
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      </div>
    </div>
    </>
   )
}