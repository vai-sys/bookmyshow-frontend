



import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      imageUrl: "https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg",
      title: "HDFC Bank Card Offer",
      type: "OFFER"
    },
    {
      id: 2,
      imageUrl: "https://assets-in.bmscdn.com/promotions/cms/creatives/1730789155169_1240x300pkpune.png",
      title: "Haazri - A Homage to Padma Vibhushan",
      subtitle: "Dil Mein Samaa Jaa",
      date: "17 JANUARY",
      location: "MUMBAI",
      type: "EVENT"
    },
    {
      id: 3,
      imageUrl: "https://assets-in.bmscdn.com/promotions/cms/creatives/1730873728478_maroon5webshowcase1240x300.jpg",
      title: "Your Journey gets Better",
      type: "PROMO"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative bg-black">
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-black/30 
                 hover:bg-black/50 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-black/30 
                 hover:bg-black/50 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      <div className="max-w-7xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className="relative aspect-[3/1]">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all ${
              currentSlide === index ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;