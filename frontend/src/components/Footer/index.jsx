import { useLocation, Link } from "react-router-dom";
import { Divider } from "primereact/divider";
import { Logo } from "../Logo";
import { MenuItems } from "../MenuItems";
import { Info } from "../../data/Info";

export function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

  const {
    name,
    description,
    social: { tblank, redes },
    menusections: { menufooter },
    menu,
    address,
    phone,
  } = Info;

  return (
    <footer className="p-3 pt-6 pb-4 xl:p-7 xl:pb-4 bg-gray-900 text-white">
      <div className="max-w-75rem mx-auto">
        <div className="flex flex-wrap">
          
          <div className="w-full xl:w-4">
            <Logo isWhite={true} />
            <p className="w-full xl:w-20rem mb-5">{description}</p>

            <div className="flex justify-content-start gap-4" role="list">
              {redes.map(({ link, name, icon }, i) => (
                <Link
                  key={i}
                  to={link}
                  aria-label={name}
                  role="listitem"
                  className="text-white transition-colors duration-300 hover:text-pink-600"
                  title={name}
                  target={tblank ? "_blank" : undefined}
                  rel={tblank ? "noopener noreferrer" : undefined}
                >
                  <i className={`${icon} text-xl`} aria-hidden="true"></i>
                </Link>
              ))}
            </div>
          </div>

          
          <div className="flex w-full xl:w-6 my-5 xl:my-0">
            {menufooter.map((section, i) => (
              <div key={i} className="flex-none w-6">
                <h3 className="mt-0">{section.title}</h3>
                <ul>
                  <MenuItems
                    section={section}
                    currentPath={currentPath}
                    menuData={menu}
                  />
                </ul>
              </div>
            ))}
          </div>

          
          <div className="flex-none w-full xl:w-2">
            <h3 className="mt-0">Contato</h3>
            <address className="mb-3" style={{ fontStyle: "normal" }}>
              <a
                href={`//google.com/maps/dir//${encodeURIComponent(address)}`}
                className="transition-colors duration-400 hover:text-pink-600"
                title={address}
                target="_blank"
              >
                {address}
              </a>
            </address>
            <a
              href={`tel:${phone.replace(/\D/g, "")}`}
              className="transition-colors duration-400 hover:text-pink-600"
              title={phone}
            >
              {phone}
            </a>
          </div>
        </div>

        
        <Divider className="bg-white opacity-20 mt-5 mb-4" />

        
        <div className="max-w-75rem mx-auto text-center text-lg">
          <span>
            &copy; {new Date().getFullYear()} {name}
          </span>
        </div>
      </div>
    </footer>
  );
};