import fire from "../../../assets/images/fire.svg";

export function InfoMainHome() {
  return (
    <div className="container mx-auto">
      <div className="w-full flex flex-col">
        <div className="flex flex-col">
          <h5 className="text-primary-color md:text-warning-color font-bold text-[1rem]">
            Melhores ofertas personalizadas
          </h5>
          <span className="flex items-center text-black font-bold text-2xl sm:text-3xl md:text-[3rem] md:w-[25rem] leading-tight md:leading-[4rem]">
            Queima de estoque Nike
            <img
              src={fire}
              alt="Ícone de fogo"
              className="w-8 sm:w-10 md:w-20 mt-2 sm:mt-4 md:mt-15"
            />
          </span>
          <p className="text-dark-gray-2-color w-full md:w-[24rem] mt-3 text-base md:text-lg">
            Consequat culpa exercitation mollit nisi excepteur do do tempor
            laboris eiusmod irure consectetur.
          </p>
        </div>
      </div>
    </div>
  );
}
