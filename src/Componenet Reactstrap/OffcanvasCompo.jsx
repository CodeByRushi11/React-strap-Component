import React, { useState } from "react";

const OffcanvasCompo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleOffcanvas}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Open Offcanvas
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleOffcanvas}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      {/* Offcanvas */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Offcanvas</h2>
          <button
            onClick={toggleOffcanvas}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="p-4">
          <strong>This is the Offcanvas body.</strong>
        </div>
      </div>
    </div>
  );
};

export default OffcanvasCompo;
