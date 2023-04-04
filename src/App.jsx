import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';
import Map from './Component/Map';
import './App.css';

function App() {
  const [IP, setIP] = useState('');
  const [adress, setAdress] = useState(null);

  useEffect(() => {
    async function ipTracker() {
      const res = await fetch(
        `https://api.ipgeolocation.io/ipgeo?apiKey=4ac3c6e2417247d78a9b13c924dbf3ff&ip=${IP}`,
      );
      const data = await res.json();
      setAdress(data);
    }
    ipTracker();
  }, [IP]);

  const ipAddress = () => {
    setIP(document.getElementById('text').value);
    document.getElementById('text').value = '';
  };
  return (
    <>
      {!(adress === null) && (
        <div>
          <div className="bgImage grid relative items-center justify-items-center z-[1000] w-full bg-no-repeat bg-center bg-cover">
            <div className="pt-[2.125rem] w-[calc(100%-3rem)] max-w-[34.688rem] text-center ms-auto me-auto mb-36 md:pt-[2.125rem]">
              <p className="font-medium text-[clamp(1.625rem,1.3846rem+1.0256vw,2rem)] leading-5 text-white tracking-normal">
                IP Address Tracker
              </p>
              <div className="w-full flex mt-[1.875rem] mb-6">
                <input
                  type="text"
                  id="text"
                  className="w-full py-[1.125rem] px-6 text-base rounded-l-[.938rem]"
                  placeholder="Search for any IP address or domain"
                />
                <button
                  type="submit"
                  onClick={ipAddress}
                  className="inline-flex p-5 rounded-r-2xl bg-[#2b2b2b] ring-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="14"
                    role="img"
                    aria-describedby="icon-arrow"
                  >
                    <title id="icon-arrow">Icon arrow</title>
                    <path
                      fill="none"
                      stroke="#FFF"
                      strokeWidth="3"
                      d="M2 1l6 6-6 6"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-[calc(100%-3rem);] max-w-[69.375rem] text-center mt-[2.875rem] md:mt-0 bg-white py-6 rounded-[.938rem] grid md:grid-cols-4 gap-6 leading-4 absolute top-[100%] left-[50%] -translate-x-[50%] -translate-y-[50%] md:gap-0 md:text-left md:py-[2.375rem]">
              <div className="flex flex-col gap-2 md:px-8 md:gap-[.875rem] md:border-l-[1px]">
                <h2 className="uppercase tracking-[1.46px] font-bold text-[clamp(.625rem,.5449rem+.3419vw,.75rem);] text-[#969696]">
                  IP ADDRESS
                </h2>
                <div className="flex flex-wrap">
                  <p className="font-medium  text-[clamp(1.25rem,1.0096rem+1.0256vw,1.625rem);] leading-8 break-all">
                    {adress.ip}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:px-8 md:gap-[.875rem] md:border-l-[1px]">
                <h2 className="uppercase tracking-[1.46px] font-bold text-[clamp(.625rem,.5449rem+.3419vw,.75rem);] text-[#969696]">
                  LOCATION
                </h2>
                <p className="font-medium  text-[clamp(1.25rem,1.0096rem+1.0256vw,1.625rem);] leading-8 ">
                  {adress.country_capital}
                  {adress.country_name}
                </p>
              </div>
              <div className="flex flex-col gap-2 md:px-8 md:gap-[.875rem] md:border-l-[1px]">
                <h2 className="uppercase tracking-[1.46px] font-bold text-[clamp(.625rem,.5449rem+.3419vw,.75rem);] text-[#969696]">
                  TIME
                </h2>
                <p className="font-medium  text-[clamp(1.25rem,1.0096rem+1.0256vw,1.625rem);] leading-8 break-all">
                  {adress.time_zone.current_time}
                </p>
              </div>
              <div className="flex flex-col gap-2 md:px-8 md:gap-[.875rem] md:border-l-[1px]">
                <h2 className="uppercase tracking-[1.46px] font-bold text-[clamp(.625rem,.5449rem+.3419vw,.75rem);] text-[#969696]">
                  ISP
                </h2>
                <p className="font-medium  text-[clamp(1.25rem,1.0096rem+1.0256vw,1.625rem);] leading-8 break-all">
                  {adress.isp}
                </p>
              </div>
            </div>
          </div>
          <Map adress={adress} />
        </div>
      )}
    </>
  );
}

export default App;
