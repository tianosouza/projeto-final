import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Info } from "../../data/Info";

export function Logo ({ isWhite }) {  
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const { name, icon } = Info;;
  
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      
      setIsMobile((prev) => (prev !== mobile ? mobile : prev));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  return (
    <Link
      to="/"
      className={`flex align-items-center gap-1 ${
        isWhite ? "text-white" : "text-pink-600"
      }`}
      title={name}
      style={{ fontSize: isMobile ? "2rem" : "2.4rem" }}
    >
      <i className={icon}></i>
      <span className="font-semibold">{name}</span>
    </Link>
  );
};