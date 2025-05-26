import { useState, useEffect, useRef, useCallback } from 'react';
import tenis from "../../assets/images/tenis-swiper.svg";

export default function SwiperComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayDelay = 3000;
  const autoplayRef = useRef(null);

  const images = [
    {
      src: tenis,
      alt: "White and red Nike Air Force 1 sneaker",
    },
    {
      src: tenis,
      alt: "White and red Nike Air Force 1 sneaker - view 2",
    },
    {
      src: tenis,
      alt: "White and red Nike Air Force 1 sneaker - view 3",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(nextSlide, autoplayDelay);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAutoplay, nextSlide]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-100">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full flex-shrink-0">
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex ml-50 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full focus:outline-none ${
                index === currentIndex ? "bg-pink-500" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}