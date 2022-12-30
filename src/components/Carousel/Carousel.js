import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import loginImg from '../../Assets/loginImg.png'
import registerImg from '../../Assets/registerImg.png'
import git from '../../Assets/git.png'

const Carousel = () => {
  return (
    <div>
      <div>
      <h2 className=' flex font-bold text-black justify-center text-4xl py-10'>
        This is home
      </h2>
      </div>
      <Swiper
        className="mySwiper h-80 w-auto bg-gray-400"
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src={loginImg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={registerImg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={git} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className='h-screen'>

      </div>
    </div>
  )
}

export default Carousel
