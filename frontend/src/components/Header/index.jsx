import { useLocation } from "react-router-dom";
import { Logo } from "../Logo";
import { ActionRegLog } from "../ActionRegLog";
import { ActionCar } from "../ActionCar";
import { NavSidebar } from "../NavSidebar";
import { SearchBar } from "../SearchBar";
import { MenuItems } from "../MenuItems";
import { Info } from "../../data/Info";

export function Header() {
  
  const location = useLocation();
  const currentPath = location.pathname;

  const {
    menusections: { menuheader },
    menu,
  } = Info;

  return (
    <header className="sticky top-0 z-5 bg-white">
      <div className="max-w-75rem mx-auto p-3">
        <div className="flex align-items-center justify-content-between md:justify-content-around md:gap-5">
          <div className="block md:hidden">
            <NavSidebar
              menuheader={menuheader}
              menu={menu}
              currentPath={currentPath}
            />
          </div>
          
          <Logo />          
          <SearchBar />
          
          <div className="flex align-items-center gap-3 md:gap-7">            
            <div className="hidden md:block">
              <ActionRegLog />
            </div>            
            <ActionCar />
          </div>
        </div>
      </div>

      
      <div className="hidden md:block">
        <div className="max-w-75rem mx-auto px-3">
          <div className="flex flex-wrap gap-5">
            
            {menuheader.map((section, i) => (
              <ul key={i} className="flex gap-5 m-0 p-0 list-none">
                <MenuItems
                  section={section}
                  currentPath={currentPath}
                  menuData={menu}
                />
              </ul>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};