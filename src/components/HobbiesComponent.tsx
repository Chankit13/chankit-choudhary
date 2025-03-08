
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Hobby {
  name: string;
  image: string;
}

const hobbies: Hobby[] = [
//   { name: 'Guitar', image: '' },
  { name: 'BakeHouse', image: '/images/bake-house.jpg' },
  { name: 'Sunset', image: '/images/sunset.jpg' },
  { name: 'Crime Thrillers', image: '/images/detective.jpg' },
  { name: 'Do not disturb mode', image: '/images/No-dist.jpg' },
  { name: 'Water Activities', image: '/images/waterr.jpg' },
  
];

const Hobbies: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC] dark:bg-[#151B28] rounded-lg p-4 shadow-md">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4 text-center">
        What I like ?
      </h2>
      
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        className="w-full max-w-lg"
      >
        {hobbies.map((hobby) => (
          <SwiperSlide key={hobby.name}>
            <div className="flex flex-col items-center justify-center p-3 bg-white dark:bg-[#252B3B] rounded-lg shadow-md">
              <img src={hobby.image} alt={hobby.name} className="w-[300px] h-[400px] object-cover rounded-lg" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2">
                {hobby.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hobbies;
