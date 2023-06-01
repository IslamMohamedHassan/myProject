import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PartnersSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    pauseOnHover: true,
  };


  return (
    <div className="container">
      <h2 className='text-center mt-4'>عملائنا</h2>
      <Slider {...settings} className="partners-slider mt-4">
        <div><a href="#1">
          <img
            src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg"
            alt="First slide"
            style={{ width: '100%', height: 'auto' }}
          />
        </a>
        </div>
        <div><a href="#1">

          <img
            src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg"
            alt="Second slide"
            style={{ width: '100%', height: 'auto' }}
          />
        </a>
        </div>
        <div>
            <a href="#1" className='border-0'><img
            src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg"
            alt="Third slide"
            style={{ width: '100%', height: 'auto' }}
          /></a>
          
        </div>
        <div><a href="#1">
          <img
            src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg"
            alt="Fourth slide"
            style={{ width: '100%', height: 'auto' }}
          />
        </a>
        </div>
        <div><a href="#1">
          <img
            src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg"
            alt="Fifth slide"
            style={{ width: '100%', height: 'auto' }}
          />
        </a>
        </div>
        <div><a href="#1">

          <img
            src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg"
            alt="Sixth slide"
            style={{ width: '100%', height: 'auto' }}
          />
        </a>
        </div>
        <div><a href="#1">
          <img
            src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg"
            alt="Seventh slide"
            style={{ width: '100%', height: 'auto' }}
          />
        </a>
        </div>
      </Slider>
    </div>
  );
};

export default PartnersSlider;