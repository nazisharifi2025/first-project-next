"use client";

import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-10">
      <Slider {...settings}>
        <div className="w-full h-[500px] object-cover rounded-md bg-blue-200">
          {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhwnwdKJ76MNnvMuc2LFa5rF3rvYAQumX-yw&s"
            alt="Slide 1"
            
          /> */}
        </div>
        <div className="w-full h-[500px] object-cover rounded-md bg-stone-400">
          {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4SBWFfzXz5VvV5llCYPbXuQB9Xs6aNmrmQ&s"
            alt="Slide 2"
            
          /> */}
        </div>
        <div className="w-full h-[500px] object-cover rounded-md bg-pink-200" >
          {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQul7haU4tIa-YK-duuGRoFD4SV5rXCRjlkiw&s"
            alt="Slide 3"
            
          /> */}
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
