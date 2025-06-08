import { SwiperComponent } from "../../SwiperComponent";
import { InfoMainHome } from "./InfoMainHome";
import ornament from "../../../assets/images/ornament.svg";

export function MainHome() {
  return (
    <div className="bg-light-gray-3-color min-h-[32.5rem] w-full text-gray-900 flex flex-col p-4 relative overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row justify-between w-full items-center gap-8 px-0 md:px-8 md:min-h-[30rem] md:max-w-[100rem]">
        <div className="w-full">
          <InfoMainHome />
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <SwiperComponent />
        </div>
          <div className="w-20 sm:w-24 md:w-[10rem] pointer-events-none z-10 absolute top-2  -right-10">
            <img src={ornament} alt="Ornament" className="" />
          </div>
      </div>
    </div>
  );
}
