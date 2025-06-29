import { CollectionCard } from "../CollectionCard";

export function CollectionListing ({ cols = [12], data }) { 

  const breakpoints = ["", "md", "lg", "xl", "xxl"];

  const colClasses = cols
    .map((col, i) => {
      const bp = breakpoints[i];
      return bp ? `${bp}:col-${col}` : `col-${col}`;
    })
    .join(" ");

  return (
    <div className="grid">
      {data.map((collection, index) => (
        <div key={index} className={`${colClasses}`}>        
          <CollectionCard {...collection} />
        </div>
      ))}
    </div>
  );
};