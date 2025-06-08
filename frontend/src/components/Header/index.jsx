import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import logo from '../../assets/images/logo-header.svg';

export function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();

    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-white shadow-sm relative">
      {isMobile ? (
        <>
          <div className="flex items-center justify-between p-4">
            <button
              className="text-gray-800 z-50 relative"
              onClick={handleMenuToggle}
            >
              {isMenuOpen ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
            </button>

            <div className="flex justify-center">
              <div className="text-primary-color font-bold text-xl flex items-center">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-[8.625rem]"
                />
              </div>
            </div>

            <div className="flex items-center">
              <button
                className="mr-4 text-gray-700"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <SearchOutlinedIcon />
              </button>
              <div className="relative">
                <button className="text-gray-700">
                  <ShoppingCartOutlinedIcon />
                  <span className="absolute -top-2 -right-2 bg-primary-color text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    2
                  </span>
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsMenuOpen(false)}
            />
          )}

          <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="text-primary-color font-bold text-xl">
                  <img
                    src={logo}
                    alt="Digital Store"
                    className="w-32"
                  />
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <CloseOutlinedIcon />
                </button>
              </div>

              <div className="mb-8">
                <h3 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wide">
                  Páginas
                </h3>
                <nav className="space-y-3">
                  <Link
                    to="/"
                    className={`block py-2 text-base font-medium transition ${
                      isActive('/') 
                        ? 'text-primary-color border-l-2 border-primary-color pl-4' 
                        : 'text-gray-700 hover:text-primary-color'
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/produtos"
                    className={`block py-2 text-base font-medium transition ${
                      isActive('/produtos') 
                        ? 'text-primary-color border-l-2 border-primary-color pl-4' 
                        : 'text-gray-700 hover:text-primary-color'
                    }`}
                  >
                    Produtos
                  </Link>
                  <Link
                    to="/categorias"
                    className={`block py-2 text-base font-medium transition ${
                      isActive('/categorias') 
                        ? 'text-primary-color border-l-2 border-primary-color pl-4' 
                        : 'text-gray-700 hover:text-primary-color'
                    }`}
                  >
                    Categorias
                  </Link>
                  <Link
                    to="/meus-pedidos"
                    className={`block py-2 text-base font-medium transition ${
                      isActive('/meus-pedidos') 
                        ? 'text-primary-color border-l-2 border-primary-color pl-4' 
                        : 'text-gray-700 hover:text-primary-color'
                    }`}
                  >
                    Meus Pedidos
                  </Link>
                </nav>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-primary-color hover:bg-secondary-color text-white py-3 px-4 rounded-lg text-base font-medium transition">
                  Entrar
                </button>
                <a 
                  href="#" 
                  className="block text-center text-gray-700 hover:text-primary-color transition text-base underline"
                >
                  Cadastre-se
                </a>
              </div>
            </div>
          </div>

          {isSearchOpen && (
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pesquisar produto..."
                  className="w-full bg-white rounded-lg pl-4 pr-10 py-3 text-sm text-gray-700 focus:outline-none shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <SearchOutlinedIcon />
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-primary-color font-bold text-xl flex items-center">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-[44] w-[253] mr-2"
                />
              </div>
            </div>

            <div className="relative flex-1 max-w-lg mx-6">
              <input
                type="text"
                placeholder="Pesquisar produto..."
                className="w-full bg-gray-100 rounded-lg pl-4 pr-10 py-2 text-sm text-gray-700 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <SearchOutlinedIcon />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-primary-color transition text-sm underline">
                Cadastre-se
              </a>
              <button className="bg-primary-color hover:bg-secondary-color text-white px-4 py-2 rounded text-sm">
                Entrar
              </button>
              <div className="relative">
                <button className="text-gray-700 hover:text-primary-color transition">
                  <ShoppingCartOutlinedIcon />
                  <span className="absolute -top-2 -right-2 bg-primary-color text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    2
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <nav className="flex">
              <Link
                to="/"
                className={`mr-6 text-sm pb-2 font-medium transition ${
                  isActive('/') ? 'border-b-2 border-primary-color text-primary-color' : 'text-gray-700 hover:text-primary-color'
                }`}
              >
                Home
              </Link>
              <Link
                to="/produtos"
                className={`mr-6 text-sm pb-2 font-medium transition ${
                  isActive('/produtos') ? 'border-b-2 border-primary-color text-primary-color' : 'text-gray-700 hover:text-primary-color'
                }`}
              >
                Produtos
              </Link>
              <Link
                to="/categorias"
                className={`mr-6 text-sm pb-2 font-medium transition ${
                  isActive('/categorias') ? 'border-b-2 border-primary-color text-primary-color' : 'text-gray-700 hover:text-primary-color'
                }`}
              >
                Categorias
              </Link>
              <Link
                to="/meus-pedidos"
                className={`text-sm pb-2 font-medium transition ${
                  isActive('/meus-pedidos') ? 'border-b-2 border-primary-color text-primary-color' : 'text-gray-700 hover:text-primary-color'
                }`}
              >
                Meus Pedidos
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}