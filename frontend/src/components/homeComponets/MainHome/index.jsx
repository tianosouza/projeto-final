import SwiperComponent from '../../SwiperComponent';
import InfoMainHome from './InfoMainHome';

export default function MainHome() {
  return (
    <div className="bg-light-gray-3-color min-h-[32.5rem] w-full text-gray-900  flex flex-col p-4">
      <div className="flex pl-8 justify-between w-full items-center gap-8">
        <div>
          <InfoMainHome />
        </div>
        <div>
          <SwiperComponent />
        </div>
      </div>
    </div>
  );
}