import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerImages = [
    {
      url: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&h=400',
      alt: 'Medical professionals working',
      title: 'Find Your Nearest Pharmacist',
      description: 'Quick and easy access to healthcare professionals'
    },
    {
      url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&h=400',
      alt: 'Modern pharmacy interior',
      title: 'Quality Healthcare Services',
      description: 'Connect with trusted pharmacies in your area'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === bannerImages.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="banner">
      <div className="banner-slider">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <div className="banner-content">
              <h2>{image.title}</h2>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="banner-dots">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;