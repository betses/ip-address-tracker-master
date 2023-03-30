import './App.css';
import bgMob from './assets/pattern-bg-mobile.png';
import arrow from './assets/icon-arrow.svg';
import bgDesk from './assets/pattern-bg-desktop.png';
function App() {
  // const imageUrl = window.innerWidth >= 375 ? bgDesk : bgMob;

  return (
    <div className="w-full space-y-8 bg-no-repeat h-96 bg-mobileBG md:bg-desktopBG">
      <h1 className="pt-8 text-3xl font-semibold text-center text-white">
        IP Address Tracket
      </h1>
      <div className="flex ml-6 md:justify-center">
        <div className="px-5 py-3 bg-white cursor-pointer rounded-l-2xl md:w-[40%]">
          <input
            className="text-lg  outline-none text-[#2b2b2b] md:placeholder:text-lg w-full placeholder:hidden"
            placeholder="Search for any IP adresses or domain"
          />
        </div>
        <button className="flex items-center justify-center px-5 bg-black rounded-r-2xl">
          <img src={arrow} />
        </button>
      </div>
      <div className="absolute flex flex-col md:flex-row md:space-x-10 px-16 md:px-10 md:py-12 py-5 space-y-5 md:space-y-0 bg-white shadow-lg rounded-2xl top-40 left-[5%] md:left-[20%] ">
        <div className="flex flex-col items-center space-y-2 md:items-start md:justify-center">
          <p className="text-[#969696] capitalize text-sm font-bold">
            IP ADDRESS
          </p>
          <p className="text-[#2b2b2b] text-xl font-semibold">
            192.212.174.101
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 md:items-start md:justify-center">
          <p className="text-[#969696] capitalize text-sm font-bold">
            lOCATION
          </p>
          <p className="text-[#2b2b2b] text-xl font-semibold">
            Brooklyn NY 10001
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 md:items-start md:justify-center">
          <p className="text-[#969696] capitalize text-sm font-bold">
            TIMEZONE
          </p>
          <p className="text-[#2b2b2b] text-xl font-semibold">UTC -05:00</p>
        </div>
        <div className="flex flex-col items-center space-y-2 md:items-start md:justify-center">
          <p className="text-[#969696] capitalize text-sm font-bold">ISP</p>
          <p className="text-[#2b2b2b] text-xl font-semibold">
            SpaceX Starlink
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
