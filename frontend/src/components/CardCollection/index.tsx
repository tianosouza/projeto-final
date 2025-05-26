import ButtonComponent from "../ButtonComponent";

export default function CardCollection({
  offer,
  title,
  button,
  image,
  styleProduct,
}) {
  const style = "text-primary-color font-bold text-2xl z-1";
  return (
    <div className="relative bg-info-color w-full max-w-[25rem] h-auto md:h-[15rem] rounded-md flex md:flex-row overflow-hidden">
      <div className="flex flex-col gap-3 pt-6 md:pt-8 pl-4 md:pl-8 pb-4 md:pb-0 z-10">
        <div className="bg-offer-color w-fit min-w-[6rem] max-w-[6rem] h-[2rem] px-4 text-xs text-black font-bold flex items-center justify-center rounded-4xl">
          {offer}
        </div>
        <span className="text-black font-bold text-2xl w-full md:w-[10rem]">
          {title}
        </span>
        <ButtonComponent name={button} style={style} />
      </div>
      <img
        src={image}
        alt="product"
        className={`absolute object-contain ${styleProduct}`}
      />
    </div>
  );
}
