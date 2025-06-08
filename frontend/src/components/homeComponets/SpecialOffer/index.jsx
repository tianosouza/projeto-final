import tenis from "../../../assets/images/tenis-jordan.svg";
import ButtonComponent from "../../ButtonComponent";

export function SpecialOffer() {
  const style = "bg-primary-color text-white font-semibold";

  return (
    <div className="bg-color-secondary-light">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative flex items-center justify-center p-8 bg-gray-50">
            <div
              className="rounded-full w-64 h-64"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(66, 0, 255, .3) 0%, rgba(255, 255, 255, 0) 50%)",
              }}
            >
              <img
                src={tenis}
                alt="Air Jordan Special Offer"
                className="absolute w-72 object-contain transform -translate-x-4 -translate-y-2"
              />
            </div>
          </div>
          <div className="p-6">
            <span className="text-primary-color font-semibold text-sm uppercase tracking-wide">
              Oferta especial
            </span>

            <h2 className="text-2xl font-bold mt-2 mb-4 text-gray-900 leading-tight">
              Air Jordan edição de colecionador
            </h2>

            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>

            <ButtonComponent name={"Ver Oferta"} styleButton={style} />
          </div>
        </div>
      </div>
    </div>
  );
}
