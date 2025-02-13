import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { cake, flower, fog, forget_me_not, gidle, magnet, pangzi_1, ny_1, selfie_1, sunset, star, uw_football_2, } from '../assets';

const images = [
  { src: selfie_1, title: "This is me! Hi There!", desc: "This beautiful young lady..." },
  { src: pangzi_1, title: "My sister's pet little fattie", desc: "Used to be fat but now slim and now he is 10 years old. Amazing! My Bestie ♥️" },
  { src: cake, title: "Fruity pancakes", desc: "I got it from Alimentari Grande in Shanghai. Delicious~" },
  { src: forget_me_not, title: "Myosotis", desc: "A flower that whispers, 'Don't forget me.'" },
  { src: fog, title: "Weird Fog", desc: "Real Version of Slience Hill (Freak out)" },
  { src: sunset, title: "Sunset", desc: "Incredible sunset near Lake Mendota" },
  { src: star, title: "Starry", desc: "A group of friends stayed up until 3 AM to chase meteors" },
  { src: uw_football_2, title: "Game Day!!", desc: "Become a fan for football game after came to UW-Madison" },
  { src: ny_1, title: "Reflection", desc: "Cystal clear reflection with blue sky..." },
  { src: magnet, title: "My Magnet Collection", desc: "Too many to fit in on one refrigerator 😭" },
  { src: gidle, title: "(G)I-DLE", desc: "My favorite Kpop Girls Group 🙌 BlackPink too~ They are so energetic!" },
  { src: flower, title: "Sakura I guess?", desc: "It blooms to make my day! I hope you enjoy today too~" },
  
]; 

const PhotoCarousel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}  
        loop={true}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 10, 
          stretch: 50, 
          depth: 200, 
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="rounded-lg"
      >
        {images.map((movie, idx) => (
          <SwiperSlide key={idx} className="w-[300px]">
            <div className="relative w-full h-[400px]">
              <img
                src={movie.src}
                alt={movie.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-60 text-white p-4 rounded-b-lg">
                <h3 className="text-lg font-bold">{movie.title}</h3>
                <p className="text-sm">{movie.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoCarousel;
