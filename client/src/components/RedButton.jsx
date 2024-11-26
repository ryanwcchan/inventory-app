import React from "react";

export default function RedButton({ children, func }) {
  return (
    <button
      onClick={func}
      className="bg-red-600 hover:bg-red-700 text-white 
        font-bold py-2 px-4 rounded cursor-pointer select-none"
    >
      {children}
    </button>
  );
}
