import { useState } from "react";
import { BiSolidError } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaTemperatureHalf } from "react-icons/fa6";
import { TiWeatherCloudy } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/router";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const getWeather = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(`/api/weather?city=${city}`);
      const data = await res.json();

      if (res.ok) {
        setWeather(data);
        setError(null);
      } else {
        setWeather(null);
        setError(data.error);
      }
    } catch (error) {
      setError("Failed to fetch data", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r bg-blue-200 to-blue-400 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-slate-700">My Weather App</h2>
        <form onSubmit={getWeather} className="flex items-center gap-3 mt-5">
          <input
            type="text"
            placeholder="Masukkan lokasi..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2.5 border-2 text-rose-700 font-semibold border-fuchsia-600 rounded-lg shadow-md focus:outline-none  focus:ring-0 focus:border-fuchsia-500 active:border-fuchsia-700 shadow-purple-200"
          />
          <button
            type="submit"
            className="w-fit bg-violet-500 text-white px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-violet-700 cursor-pointer transition-all duration-300">
            <FaSearch className="text-lg" />
            Cari
          </button>
        </form>

        {/* Error Message */}
        {error && (
          <div className="mt-4 bg-[#eab345] flex w-full p-3 items-center gap-2 rounded-lg">
            <BiSolidError className="size-7 fill-amber-800" />
            <p className="text-white font-medium">{error}</p>
          </div>
        )}

        {/* Weather Data */}
        {weather && (
          <div className="mt-7 transition-all duration-500 hover:translate-y-2 w-full h-40 rounded-lg flex flex-col p-4 bg-gradient-to-tr from-slate-700 to-rose-800 text-white shadow-[0_0_20px_rgba(0,255,255,0.6)]">
            <h3 className="text-xl font-semibold text-center pb-3">
              {weather.name}, {weather.sys.country}
            </h3>
            <div>
              <div className="flex items-center gap-1.5">
                <FaTemperatureHalf className="size-6 text-yellow-300" />
                <p>Temperature: {weather.main.temp}°C</p>
              </div>
              <div className="flex items-center gap-1.5">
                <TiWeatherCloudy className="size-6 text-gray-300" />
                <p>Weather: {weather.weather[0].description}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <WiHumidity className="size-6 text-blue-300" />
                <p>Humidity: {weather.main.humidity}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Back to Home */}
      <button
        type="button"
        onClick={() => router.push("/")}
        className="px-4 py-2 mt-8 bg-emerald-600 shadow-[4px_4px_0px] shadow-slate-600 hover:shadow-none text-white border-4 border-emerald-950 rounded-lg font-bold transition flex items-center gap-3 cursor-pointer">
        <IoMdArrowRoundBack className="size-6" />
        Kembali
      </button>
    </div>
  );
}

export default Weather;
