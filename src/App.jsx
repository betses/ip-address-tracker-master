import './App.css';
import arrow from './assets/icon-arrow.svg';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
function App() {
  return (
    <div>
      <div className="w-full bg-no-repeat h-96 bg-mobileBG md:bg-desktopBG bg-cover">
        <h1 className="pt-10 text-3xl font-semibold text-center text-white">
          IP Address Tracket
        </h1>
        <div className="flex ml-6 mt-20 justify-center">
          <div className="px-5 py-3 bg-white cursor-pointer rounded-l-2xl w-[70%] md:w-[40%]">
            <input
              className="text-lg  outline-none text-[#2b2b2b] md:placeholder:text-lg w-full placeholder:hidden"
              placeholder="Search for any IP adresses or domain"
            />
          </div>
          <button className="flex items-center justify-center px-5 bg-black rounded-r-2xl">
            <img src={arrow} />
          </button>
        </div>
        <div className=" mt-20 flex flex-col mx-[10%] px-12 py-5 space-y-5 md:space-y-0 md:py-14 bg-white shadow-lg rounded-2xl md:grid md:grid-cols-4 ">
          <div className="flex flex-col items-center">
            <p className="text-[#969696] capitalize text-sm font-bold md:text-base ">
              IP ADDRESS
            </p>
            <p className="text-[#2b2b2b] text-xl font-semibold md:text-2xl">
              192.212.174.101
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#969696] capitalize text-sm font-bold md:text-base ">
              lOCATION
            </p>
            <p className="text-[#2b2b2b] text-xl font-semibold md:text-2xl">
              Brooklyn NY 10001
            </p>
          </div>
          <div className="flex flex-col items-center  ">
            <p className="text-[#969696] capitalize text-sm font-bold md:text-base ">
              TIMEZONE
            </p>
            <p className="text-[#2b2b2b] text-xl font-semibold md:text-2xl">
              UTC -05:00
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#969696] capitalize text-sm font-bold md:text-base ">
              ISP
            </p>
            <p className="text-[#2b2b2b] text-xl font-semibold md:text-2xl">
              SpaceX Starlink
            </p>
          </div>
        </div>
      </div>
      <MapContainer
        className="h-[20rem] w-30rem relative"
        center={[8.978119, 38.717165]}
        zoom={13}
      >
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
}

export default App;
