import tenis from "../../../assets/images/tenis-jordan.svg";
import ButtonComponent from "../../ButtonComponent";

export default function SpecialOffer() {
  const style = "bg-primary-color text-white font-semibold";

  return (
    <div className="bg-color-secondary-light container mx-auto px-4 py-8 flex flex-col lg:flex-row  justify-center gap-6 text-gray-900">
      <div className="w-full lg:w-1/2 flex items-center justify-center relative">
        <div
          className="rounded-full w-72 h-72 sm:w-80 sm:h-80 md:w-[25rem] md:h-[25rem] lg:w-[29.3rem] lg:h-[29.3rem]"
          style={{
            backgroundImage: "linear-gradient(180deg, rgba(66, 0, 255, .3) 0%, rgba(255, 255, 255, 0) 50%)",
          }}
        ></div>
        <img
          src={tenis}
          alt="Special Offer"
          className="object-cover absolute top-5 -left-5 md:top-5 md:left-30 w-[28.3rem]"
        />
      </div>

      <div className="w-full lg:w-1/2  lg:mt-0 text-center lg:text-left">
        <span className="text-primary-color font-semibold text-sm uppercase tracking-wide">
          Oferta especial
        </span>
        <h2 className="text-4xl font-bold mt-2 w-90">
          Air Jordan edição de colecionador
        </h2>
        <p className="mt-4 text-gray-700 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quidem saepe consectetur nemo vitae perspiciatis fugiat recusandae sunt commodi quia eligendi. 
          Ab eligendi ad eum expedita est qui quod voluptates minus!
        </p>
        <ButtonComponent name={"Ver oferta"} styleButton={style} />
      </div>
    </div>
  );
}
