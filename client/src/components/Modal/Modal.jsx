import ReactDOM from "react-dom";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-30 
      flex justify-center items-center transition-opacity 
      ease-in-out duration-500"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 flex flex-col rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="font-bold text-4xl pr-2 hover:text-red-600 cursor-pointer self-end"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
