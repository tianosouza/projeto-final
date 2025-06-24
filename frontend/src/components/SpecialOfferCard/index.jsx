import { useState } from "react";
import { Link } from "react-router-dom";

export function SpecialOfferCard ({ data }) {
  const { image, title, subtitle, description, link, label } = data;
  const [hovered, setHovered] = useState(false);
  
  return (
    <div
      className="grid"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered
          ? "translateY(-0.5rem) scale(1.05)"
          : "translateY(0) scale(1)",
        transition: "transform 0.3s ease",
      }}
    >

      <div className="col-12 md:col-6 mt-3 mb-7 xl:mb-2">
        <div className="flex align-items-center justify-content-center relative">
          <img
            src={image}
            className="max-w-full relative z-3 bottom-0"
            alt={title}
          />
          <span
            className="absolute border-circle bg-white-alpha-30 w-20rem h-20rem xl:w-24rem xl:h-24rem z-1"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "linear-gradient(180deg, #d7cfef, transparent)",
            }}
          ></span>
        </div>
      </div>

      <div className="col-12 md:col-6">
        <div className="py-0 xl:pl-6">
          <span className="inline-block text-xl xl:text-lg text-pink-600 font-bold mb-2">
            {title}
          </span>
          <h2 className="mt-0 mb-4 text-4xl xl:text-6xl line-height-1">
            {subtitle}
          </h2>
          <p className="m-0 mb-5 text-lg text-color line-height-3">
            {description}
          </p>
          <Link
            to={link}
            className="py-2 px-6 font-semibold inline-block px-5 transition-colors bg-pink-600 text-white transition-linear transition-duration-400 border-round-md shadow-none hover:bg-pink-700"
          >
            {label}
          </Link>
        </div>
      </div>
    </div>
  );
};