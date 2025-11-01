import React, { useState } from "react";

function ThemeSwitcherApp() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      className={`border-1 max-w-[500px] h-100 flex flex-col items-center justify-center transition-all duration-1000 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">Light/Dark Mode Toggle</h1>
      <button
        onClick={toggleTheme}
        className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
          darkMode
            ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
            : "bg-gray-800 text-white hover:bg-gray-700"
        }`}
      >
        สลับโหมด
      </button>
    </div>
  );
}

export default ThemeSwitcherApp;
