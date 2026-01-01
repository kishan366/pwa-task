"use client";
import { useState } from "react";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}&aqi=yes`
      );

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error?.message || "City not found");
      }

      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-sky-100 to-blue-200 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-4">
          🌦 Weather Check
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={fetchWeather}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {weather && (
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold">
              {weather.location.name}, {weather.location.country}
            </h2>

            <div className="flex justify-center items-center gap-2 my-3">
              <img
                src={weather.current.condition.icon}
                alt="icon"
                className="w-16 h-16"
              />
              <p className="text-3xl font-bold">
                {weather.current.temp_c}°C
              </p>
            </div>

            <p className="text-gray-600">
              {weather.current.condition.text}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
