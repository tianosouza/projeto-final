import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from '../../assets/images/logo-footer.svg';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white-color py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              <img
                src={logo}
                alt="Logo"
                className="h-[42] w-[104] mr-2"
              />
            </div>
            <p className="text-light-gray-color mb-8 text-base sm:text-lg md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white-color hover:text-light-gray-2-color transition" aria-label="Facebook">
                <FacebookRoundedIcon />
              </a>
              <a href="#" className="text-white-color hover:text-light-gray-2-color transition" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="text-white-color hover:text-light-gray-2-color transition" aria-label="Twitter">
                <TwitterIcon />
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white-color text-lg sm:text-xl font-medium mb-6">Suporte</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-light-gray-color hover:text-white-color transition text-base sm:text-lg">
                    Sobre Drip Store
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light-gray-color hover:text-white-color transition text-base sm:text-lg">
                    Segurança
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light-gray-color hover:text-white-color transition text-base sm:text-lg">
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light-gray-color hover:text-white-color transition text-base sm:text-lg">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light-gray-color hover:text-white-color transition text-base sm:text-lg">
                    Meus Pedidos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light-gray-color hover:text-white-color transition text-base sm:text-lg">
                    Trabalhe conosco
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white-color text-lg sm:text-xl font-medium mb-6">Categorias</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-light-gray-color hover:text-white-color transition text-base sm:text-lg">
                    Moda
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light-gray-color hover:text-white-color transition text-base sm:text-lg">
                    Acessórios
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light-gray-color hover:text-white-color transition text-base sm:text-lg">
                    Eletrônicos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light-gray-color hover:text-white-color transition text-base sm:text-lg">
                    Calçados
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-white-color text-lg sm:text-xl font-medium mb-6">Contato</h4>
            <address className="not-italic text-light-gray-color space-y-4 text-base sm:text-lg">
              <p>
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
              </p>
              <p>(85) 3051-3411</p>
            </address>
          </div>
        </div>

        <div className="border-t border-dark-gray-color mt-12 pt-8">
          <p className="text-light-gray-color text-center text-base sm:text-lg">
            © 2025 Digital College - Cristiano Souza - Wallison Rocha - Cleidivano - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}