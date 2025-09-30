import { useState } from "react";

const Dropdown = ({ label, position }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md"
      >
        {label}
      </button>

      {/* Dropdown menu */}
      {open && (
        <ul
          className={`
            absolute bg-white border rounded-lg shadow-lg min-w-[150px]
            ${position === "down" ? "top-full left-0 mt-2" : ""}
            ${position === "up" ? "bottom-full left-0 mb-2" : ""}
            ${position === "start" ? "left-0 -translate-x-full top-0" : ""}
            ${position === "end" ? "right-0 translate-x-full top-0" : ""}
          `}
        >
          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">Header</li>
          <li className="px-4 py-2 text-gray-400 cursor-not-allowed">
            Disabled
          </li>
          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
            Another Action
          </li>
          <hr />
          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
            Another Action
          </li>
        </ul>
      )}
    </div>
  );
};

const DropdownCompo = () => {
  return (
    <div className="flex gap-6 justify-center p-10">
      <Dropdown label="Dropup" position="up" />
      <Dropdown label="Dropdown" position="down" />
      <Dropdown label="Dropend" position="end" />
      <Dropdown label="Dropstart" position="start" />
    </div>
  );
};

export default DropdownCompo;
