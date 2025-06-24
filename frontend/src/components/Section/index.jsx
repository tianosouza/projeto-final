import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Section ({ sectionMt = 2, sectionMb = 2, titleMb = 2, title, titleAlign = 'between', link, className = '', children }) {
  
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); 

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const justifyContentClass = titleAlign === 'center' ? 'justify-content-center' : 'justify-content-between';

  return (
    <section
      className={className}
      style={{
        marginTop: isMobile ? `calc(${sectionMt}rem / 2)` : `${sectionMt}rem`,
        marginBottom: isMobile ? `calc(${sectionMb}rem / 2)` : `${sectionMb}rem`,
      }}
    >
      <div className="max-w-75rem mx-auto p-3">
        {title && (
          <div
            className={`flex ${justifyContentClass} align-items-center`}
            style={{ marginBottom: `${titleMb}rem` }}
          >
            <h2 className="text-1xl xl:text-3xl m-0 font-bold">{title}</h2>
            {link && link.href && (
              <Link
                to={link.href}
                className="text-base text-pink-600 font-bold transition-duration-400 hover:text-pink-700 hover:underline"
              >
                <span>{link.text}</span>
                <i className="pi pi-arrow-right ml-2"></i>
              </Link>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};