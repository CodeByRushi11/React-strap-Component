import React, { useState } from "react";
import { Button, Fade } from "reactstrap";
const FadeCompo = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="p-4">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Toggle Fade
      </button>

      <h5
        className={`mt-3 transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        This content will fade in and out as the button is pressed
      </h5>
    </div>
  );
};

export default FadeCompo;
