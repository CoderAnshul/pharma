import React from 'react';
import Slider from 'react-slick';
import one from '../assets/images/one.png';
import two from '../assets/images/two.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrustUs = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // Control the speed of the slide
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Continuous sliding without delay
    cssEase: "linear", // Smooth and constant sliding
    arrows: false, // Hide arrows for a clean look
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="py-20  px-8 sm:px-16 md:px-24">
      <h2 className="md:text-5xl font-semibold text-cyan-700  px-8 mb-14">
        What Our <br /> Customers Say
      </h2>
      <div className="px-8">
        <Slider {...settings}>
          {[one, two, one, two].map((image, index) => (
            <div key={index} className="px-4">
              <div className="shadow-lg bg-white rounded-lg p-4 flex justify-center items-center">
                <img
                  src={image}
                  alt={`Customer ${index + 1}`}
                  className="h-20 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrustUs;
