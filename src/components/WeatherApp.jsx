import React, { useState, useEffect } from "react";

function WeatherApp() {
  const [city, setCity] = useState("Chonburi");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchWeather(targetCity = city) {
    try {
      setLoading(true);
      setError("");
      setWeather(null);

      
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${targetCity}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        setError("ไม่พบเมืองนี้ 😢");
        return;
      }

      const { latitude, longitude, name } = geoData.results[0];

      
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      setWeather({ ...weatherData.current_weather, name });
    } catch (err) {
      setError("เกิดข้อผิดพลาดในการโหลดข้อมูล");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (city.trim() !== "") {
      fetchWeather(city);
    }
  }

  return (
    <div className="flex flex-col items-center text-gray-800 max-w-[500px] h-100 border-1 pt-10">
      <h1 className="text-3xl font-bold mb-6">Weather App</h1>

      
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="พิมพ์ชื่อเมือง..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          ค้นหา
        </button>
      </form>

      {loading && <p>กำลังโหลดข้อมูล...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {weather && (
        <div className="bg-white border-1 px-5 py-2 text-center">
          <p className="text-lg font-semibold">เมือง: {weather.name}</p>
          <p>🌡️ อุณหภูมิ: {weather.temperature}°C</p>
          <p>💨 ลม: {weather.windspeed} km/h</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
