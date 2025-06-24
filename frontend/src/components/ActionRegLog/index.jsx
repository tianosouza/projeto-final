import { Link } from "react-router-dom";
import { Info } from "../../data/Info";

export function ActionRegLog ({ onHide }) {
  const menu = Info.menu;
  
  const menuItems = menu.slice(11, 13);

  return (
    <div className="flex xl:flex-row flex-column-reverse align-items-center xl:gap-3 relative">
      {menuItems.map(({ link, name, style }, i) => (
        <Link
          key={i}
          to={link}
          className={`inline-block border-none shadow-none transition-colors transition-linear transition-duration-400 w-full xl:w-max mb-3 xl:m-0 ${
            style || ""
          }`}
          title={name}
          onClick={onHide}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};