import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Banner = () => {
  const images = [
    "https://i.ibb.co.com/4Zptnp5p/Cat-Sweater-Warm-Puppy-Clothes-Doggy-Cozy-Vest-Shirt-Autumn-Winter-Outfits-Kitten-Winter-Knitwear-Sm.webp",
    "https://i.ibb.co.com/bMrc004g/dog.webp",
    "https://i.ibb.co.com/MynschcY/Cat.jpg",
    "https://i.ibb.co.com/7HDD6mN/275342fe-9bca-4910-b390-877b72bb8343.webp",
    "https://i.ibb.co.com/mrm9NHKM/Saaff8e8b65434c89bd3a5c341f61c65d-U.webp",
    "https://i.ibb.co.com/k2jQQM6f/06b1a61e-3e1e-4a31-836b-28d1dbb7d119.webp",
    "https://i.ibb.co.com/GvBfDn56/panda-and-tiger-hoodie-pet-costumes-large-dogs.jpg",
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-11/12 mx-auto">
       
<Swiper
  modules={[Autoplay]}
  loop={true}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  spaceBetween={20}
  slidesPerView={1}
  className="w-full md:w-[1000px] h-[300px] md:h-[600px] rounded-box"
>
  {images.map((src, i) => (
    <SwiperSlide key={i} className="flex justify-center items-center">
      <img
        src={src}
        alt={`Slide ${i}`}
        className="w-full h-full object-cover rounded-2xl"
      />
    </SwiperSlide>
  ))}
</Swiper>

   <div className="max-w-3xl mx-auto">
            <h1 className="text-[#2F2F2F] font-bold text-[28px] text-center md:text-[48px] md:text-left">Everything Your Pet <br /> Deserves — All in One Place</h1>
            <p className="text-[#5E6472] mt-5 text-center md:text-left">Find trusted pet care services, adorable clothing, and expert advice to keep your furry friends happy and healthy. Whether it’s a cozy sweater, br a grooming session, or training tips — we’ve got your pet covered from nose to tail.</p>
        </div>
</div>

  );
};

export default Banner;
