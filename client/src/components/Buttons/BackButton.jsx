import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button
      className="bg-red-600 hover:bg-red-700 text-white 
        font-bold py-2 px-4 rounded cursor-pointer select-none"
      onClick={handleBack}
    >
      Back
    </button>
  );
}
