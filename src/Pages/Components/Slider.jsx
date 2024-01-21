import React from 'react';
import Banner1 from '../../images/banner1.jpg';
import Banner2 from '../../images/banner2.jpg'
import Banner4 from '../../images/banner4.jpg'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      style={{ width: '93%', height: '270px' }} 
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={Banner1} alt='Banner1'   width='100%' height='250px'  /></SwiperSlide>
      <SwiperSlide><img src={Banner2} alt='Banner1'  width='100%' height='250px'  /></SwiperSlide>
      <SwiperSlide><img src={Banner4} alt='Banner1'  width='100%' height='250px' /></SwiperSlide>
    </Swiper>
  );
};

export default Slider;
