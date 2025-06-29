import { useState } from "react";
import { CategoryCard } from "../CategoryCard";

export function CategoryListing ({ cols = [12], data }) {
  const [hoverIndex, setHoverIndex] = useState(null);

  const breakpoints = ["", "md", "lg", "xl", "xxl"];
  
  const colClasses = cols
    .map((col, index) =>
      breakpoints[index]
        ? `${breakpoints[index]}:col-${col}`
        : `col-${col}`
    )
    .join(" ");

  return (
    <div className="scroll-container flex overflow-x-auto md:grid md:justify-content-center md:align-items-center md:overflow-visible">
      
      {data.map((category, index) => (
        <div
          key={index}
          className={colClasses}>      
          <CategoryCard
            {...category}
            index={index}
            hoverIndex={hoverIndex}
            setHoverIndex={setHoverIndex}
          />
        </div>
      ))}
    </div>
  );
};