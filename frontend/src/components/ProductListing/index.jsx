import { useState } from "react";
import { ProductCard } from "../ProductCard";

export function ProductListing ({ cols = [12], data, numProducts = 0 }) {
  
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const breakpoints = ["", "md", "lg", "xl", "xxl"];
  
  const colClasses = cols
    .map((col, index) =>
      breakpoints[index] ? `${breakpoints[index]}:col-${col}` : `col-${col}`
    )
    .join(" ");
  
  const numProductsToShow = parseInt(numProducts, 10);
  const relatedProducts =
    numProductsToShow > 0 ? data.slice(0, numProductsToShow) : data;

  return (
    <div className="grid">
      {relatedProducts &&
        relatedProducts.map((product, index) => (
          <div
            key={product.id}
            className={`${colClasses} mb-0`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              transform:
                hoveredIndex === index
                  ? "translateY(-0.5rem) scale(1.05)"
                  : "translateY(0) scale(1)",
              transition: "transform 0.3s ease",
            }}
          >
            <ProductCard {...product} />
          </div>
        ))}
    </div>
  );
};