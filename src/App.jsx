import './App.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ip, setIP] = useState('');
  const [title, setTitle] = useState([
    ['IP Address', ''],
    ['Location', ''],
    ['Timezone', ''],
    ['ISP', ''],
  ]);
  const [loc, setLoc] = useState([]);
  const customIcon = new Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3179/3179068.png',
    iconSize: [40, 40],
  });

  const getIp = async () => {
    const res = await axios.get('https://geolocation-db.com/json/');
    setIP(res.data.IPv4);
    await getDeta(ip);
  };

  const getDeta = async (ip) => {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_G4dOfeS9VXv6oLfx9mYyh2jjJB5yQ&ipAddress=${ip}`
    );
    const jsonData = await response.json();
    console.log(jsonData);
    setTitle([
      ['IP Address', jsonData.ip],
      ['Location', [jsonData.location.city, ', ', jsonData.location.region]],
      ['Timezone', ['utc', ' ', jsonData.location.timezone]],
      ['ISP', jsonData.isp],
    ]);

    setLoc([jsonData.location.lat, jsonData.location.lng]);
  };

  useEffect(() => {
    getIp();
  }, []);

  return (
    <div>
      <div className="grid relative items-center justify-items-center z-[1000] w-full bg-no-repeat bg-center bg-mobileBG md:bg-desktopBG bg-cover">
        <form className="pt-[2.125rem] w-[calc(100%-3rem)] max-w-[34.688rem] text-center ms-auto me-auto mb-36 md:pt-[2.125rem]">
          <label className="font-medium text-[clamp(1.625rem,1.3846rem+1.0256vw,2rem)] leading-5 text-white tracking-normal">
            IP Address Tracker
          </label>
          <div className="w-full flex mt-[1.875rem] mb-6">
            <input
              className="w-full py-[1.125rem] px-6 text-base rounded-l-[.938rem]"
              placeholder="Search for any IP address or domain"
            />
            <button className="inline-flex p-5 rounded-r-2xl bg-[#2b2b2b] ring-0">
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
                ></path>
              </svg>
            </button>
          </div>
        </form>
        <div className="w-[calc(100%-3rem);] max-w-[69.375rem] text-center mt-[2.875rem] md:mt-0 bg-white py-6 rounded-[.938rem] grid md:grid-cols-4 gap-6 leading-4 absolute top-[100%] left-[50%] -translate-x-[50%] -translate-y-[50%] md:gap-0 md:text-left md:py-[2.375rem]">
          {title.map(([title, adress]) => (
            <div
              key={title}
              className="flex flex-col gap-2 md:px-8 md:gap-[.875rem] md:border-l-[1px]"
            >
              <h2 className="uppercase tracking-[1.46px] font-bold text-[clamp(.625rem,.5449rem+.3419vw,.75rem);] text-[#969696]">
                {title}
              </h2>
              <p className="font-medium  text-[clamp(1.25rem,1.0096rem+1.0256vw,1.625rem);] leading-8">
                {adress}
              </p>
            </div>
          ))}
        </div>
      </div>
      <MapContainer center={[8.81667, 40.51667]} zoom={13} className="h-screen">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[8.81667, 40.51667]} icon={customIcon}>
          <Popup>
            <p>This is your location</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
