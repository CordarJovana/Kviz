import React, { useReducer } from 'react';
import './about.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const data=[
    {id:1,
    naslov:'Laboratorija', 
tekst:'U laboratoriji možete uraditi hematološke, biohemijske i druge analize.',
picture:"/1.jpg"},
{id:2,
    naslov:'Pedijatar', 
    tekst:'Obezbedite svom detetu najboljeg doktora koji' ,
picture:"/2.jpg"},
{id:3,
    naslov:'Dermatolog', 
    tekst:'Neki tekst',
picture:"/3.jpg"},
{id:4,
    naslov:'Ultrazvuk', 
    tekst:'Neki tekst',
picture:"/4.jpg"},
{id:5,
    naslov:'Zubar', 
    tekst:'Neki tekst',
picture:"/5.jpg"},
{id:6,
    naslov:'Pregled', 
    tekst:'Neki tekst',
picture:"/6.jpg"}
];

const About=()=>{
    return(
        <div className="sve1">
     <Swiper
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map(user=>(
          <SwiperSlide key={user.id} className="slide">
              <div className="slide-content">
                 <div className="user-image">
                     <img src={user.picture} alt="" className="user-photo"/>
                     </div>
                     <h5 className="naslov">{user.naslov}</h5>
                     
              </div>
          </SwiperSlide>
      ))}
    
    </Swiper>
        </div>
    )
}

export default About