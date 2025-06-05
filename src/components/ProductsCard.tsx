import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { FaTag, FaCircleDollarToSlot } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// pa testear XD
import casita from '../assets/images/houses/maxresdefault.jpg'
import casita2 from '../assets/images/houses/casita2.png'
import casita3 from '../assets/images/houses/casita3.jpeg'

export default function ProductsCard() {
  return (
    <a className="bg-white shadow-md rounded-lg overflow-hidden group" href=''>
      <div className='relative'>
        {/* la wea de las imagenes */}
        <Swiper pagination={true} navigation={true} modules={[Pagination,Navigation]} className="mySwiper">
          <SwiperSlide><img src={casita} alt="Casa 1" className="w-full aspect-[4/3] h-72 object-fit duration-300 ease"/></SwiperSlide>
          <SwiperSlide><img src={casita2} alt="Casa 1" className="w-full aspect-[4/3] h-72 object-fit duration-300 ease"/></SwiperSlide>
          <SwiperSlide><img src={casita3} alt="Casa 1" className="w-full aspect-[4/3] h-72 object-fit duration-300 ease"/></SwiperSlide>
        </Swiper>
        {/* Lugar y precio */}
        <div className='absolute z-40 bottom-0 py-2 text-slate-100 duration-300 ease h-1/3 w-full pointer-events-none'>
          <div className='pl-4 space-y-1'>
            <div className='flex items-center bg-locationTextBg/60 p-2 w-max rounded-md gap-2'>
              <FaTag />
              <p className='text-md underline'>Vivienda en Pluma Verde</p>
            </div>
            <div className='flex items-center bg-locationTextBg/60 p-2 w-max rounded-md gap-2'>
              <FaCircleDollarToSlot/>
              <span className='underline text-sm'>USD750000,00</span>
              <p></p>
            </div>
          </div>

        </div>

      </div>
    </a>
  )
}
