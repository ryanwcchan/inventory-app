import React from "react";
import RedButton from "../Buttons/RedButton";

export default function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  message,
  title,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 
      flex justify-center items-center transition-opacity ease-in-out duration-500"
    >
      <div className="flex flex-col bg-white p-6 pt-2 rounded-lg mx-6">
        <button
          className="font-bold text-4xl hover:text-red-600 cursor-pointer self-end"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-2xl font-bold text-wrap text-center">
            {title ? title : "Are you sure?"}
          </h1>
          <p className="text-center text-wrap">{message}</p>
          <div className="flex gap-4 mt-4">
            <RedButton func={onConfirm}>Yes</RedButton>
            <RedButton func={onClose}>Cancel</RedButton>
          </div>
        </div>
      </div>
    </div>
  );
}
