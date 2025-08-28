import React from 'react';
import { useTheme } from "../contexts/ThemeContext"; // adjust the path as needed

function ThemeButton() {
  const { theme, lightTheme, darkTheme } = useTheme();

  const toggleTheme = () => {
    theme === 'light' ? darkTheme() : lightTheme();
    
    
  };

  return (
<button
      onClick={()=>{
        toggleTheme();
        
        
      }}
      className={`fixed top-4 right-4 z-50 w-16 h-8 rounded-full p-1 flex justify-between items-center transition-colors duration-500 ease-in-out shadow-inner ${
        theme === 'light' ? 'bg-sky-400' : 'bg-gray-800'
      }`}
      aria-label="Toggle theme"
    >
      {/* Sun Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-yellow-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      
      {/* Moon Icon */}
       <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-slate-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>

      {/* Sliding Circle */}
      <div
        className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-500 ease-in-out absolute top-1 left-1 ${
          theme === 'light' ? 'translate-x-0' : 'translate-x-8'
        }`}
      >
      </div>
    </button>
  );
}

export default ThemeButton;