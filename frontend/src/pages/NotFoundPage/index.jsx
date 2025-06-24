import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { Section } from "../../components/Section";
import { Notfound } from "../../data/Notfound";

export function NotFoundPage() {
   const { title, description, button } = Notfound;

  return (
    <Section
      sectionMt={2}
      sectionMb={5}
      className="flex flex-column align-items-center justify-content-center text-center mx-auto xl:w-5"
    >
      <div className="text-8xl text-pink-600 font-bold mb-1">404</div>
      <h2 className="text-4xl mt-0 mb-2">{title}</h2>
      <p className="mb-5 text-lg">{description}</p>

      <div className="flex flex-column xl:flex-row w-full align-items-center justify-content-center gap-3">
        {button.map(({ link, label, icon, style }, i) => (
          <Link key={i} to={link} title={label} className="w-full xl:w-auto">
            <Button
              label={label}
              icon={icon}
              className={`w-full border-pink-600 shadow-none transition-colors transition-linear transition-duration-400 ${style} hover:bg-pink-700`}
            />
          </Link>
        ))}
      </div>
    </Section>
  );
}
