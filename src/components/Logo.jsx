import React from "react";

function Logo({ className = "", size = "text-2xl" }) {
  return (
    <div className={`flex items-center gap-2 font-bold ${className}`}>
      {/* Circle icon */}
      <span className={`w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white ${size}`}>
        U
      </span>
      {/* Logo text */}
      <span className={`${size} text-gray-900 dark:text-white`}>
        UrlShorty
      </span>
    </div>
  );
}

export default Logo;
