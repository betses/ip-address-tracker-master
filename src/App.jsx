import './App.css';
import arrow from './assets/icon-arrow.svg';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
function App() {
  return (
    <div>
      <div className="grid relative items-center justify-items-center z-[1000] w-full bg-no-repeat bg-center bg-mobileBG md:bg-desktopBG bg-cover">
        <form className="pt-[1.625rem] w-[calc(100%-3rem)] max-w-[34.688rem] text-center ms-auto me-auto mb-36">
          <label className="font-medium text-[clamp(1.625rem,1.3846rem+1.0256vw,2rem)] leading-5 text-white">
            IP Adress Tracker
          </label>
          <div className="w-full flex mt-[1.875rem] mb-6">
            <input className="w-full py-[1.125rem] px-6 text-sm rounded-l-[.938rem]" />
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
      </div>
    </div>
  );
}

export default App;
