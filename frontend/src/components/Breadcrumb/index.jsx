import { Link } from "react-router-dom";

export function Breadcrumb ({ product }) {
  
  if (!product) return null;
  
  const { category, brand, name } = product;

  return (
    <nav aria-label="Breadcrumb" className="mb-4 line-height-1">
      <div className="flex flex-wrap items-center gap-1 text-lg xl:text-base text-gray-800 font-bold leading-none">
        
        <Link to="/" className="hover:text-pink-600 hover:underline">
          Home
        </Link>
        <span>/</span>
  
        <Link to="/produtos" className="hover:text-pink-600 hover:underline">
          Produtos
        </Link>
        
        {category?.value && (
          <>
            <span>/</span>
            <Link to={`/produtos/${category.value}`} className="hover:text-pink-600 hover:underline">
              {category.name}
            </Link>
          </>
        )}
        
        {brand?.value && (
          <>
            <span>/</span>
            <Link to={`/produtos?brand=${brand.value}`} className="hover:text-pink-600 hover:underline">
              {brand.name}
            </Link>
          </>
        )}
        
        <span>/</span>
        <span aria-current="page" className="text-gray-700">
          {name}
        </span>
      </div>
    </nav>
  );
};