import fire from '../../../assets/images/fire.svg';
import ornament from "../../../assets/images/ornament.svg";

export default function InfoMainHome() {
  return (
    <div className="relative w-full">
      <div className="w-full flex flex-col ml-[5rem] mt-[-10rem]">
        <div className="flex flex-col w-full">
          <h5 className="text-warning-color font-bold text-[1rem]">Melhores ofertas personalizadas</h5>
          <span className="flex items-center text-black font-bold text-[4rem] w-[30rem] leading-[4rem]">
            Queima de estoque Nike
            <img
              src={fire}
              alt="Ícone de fogo"
              className="w-20 mt-14"
            />
          </span>
          <p className="text-dark-gray-2-color w-[24rem] mt-3">
            Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
          </p>
        </div>
      </div>
      <div className="absolute -top-40 -right-200 w-1/4 h-1/4 pointer-events-none z-10">
        <img
          src={ornament}
          alt="Ornament"
          className="w-[10rem]"
        />
      </div>
    </div>
  );
}