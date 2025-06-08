import { useState, useEffect, useRef, useCallback } from "react";
import tenisRed from "../../assets/images/tenis-swiper.svg";
import tenisJordan from "../../assets/images/tenis-jordan.svg";
import tenisProduct from "../../assets/images/tenis-product.svg";

export function SwiperComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayDelay = 3000;
  const autoplayRef = useRef(null);

  const images = [
    {
      src: tenisRed,
      alt: "White and red Nike Air Force 1 sneaker",
    },
    {
      src: tenisJordan,
      alt: "White and red Nike Air Force 1 sneaker - view 2",
    },
    {
      src: tenisProduct,
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
      className="relative w-full max-w-lg mx-auto overflow-hidden"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-100 w-full aspect-[4/3] sm:aspect-[16/9]">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-full flex items-center justify-center"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-contain w-full h-full"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full focus:outline-none transition-colors duration-200 ${
                index === currentIndex ? "bg-pink-500" : "bg-gray-300"
              }`}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
