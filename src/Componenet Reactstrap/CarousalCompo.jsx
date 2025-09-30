import React, { useState } from "react";

const slides = [
  {
    src: "https://picsum.photos/id/1011/1200/400",
    caption: "First Slide",
  },
  {
    src: "https://picsum.photos/id/1012/1200/400",
    caption: "Second Slide",
  },
  {
    src: "https://picsum.photos/id/1013/1200/400",
    caption: "Third Slide",
  },
];

const CarousalCompo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const goToIndex = (index) => setActiveIndex(index);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.src}
            alt={slide.caption}
            style={{
              width: "100%",
              display: index === activeIndex ? "block" : "none",
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        ))}

        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            background: "rgba(0,0,0,0.5)",
            padding: "5px 10px",
            borderRadius: "5px",
          }}
        >
          {slides[activeIndex].caption}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={prev}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          border: "none",
          borderRadius: "50%",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 48 48"
        >
          <path
            fill="#000"
            d="m30.9 43l3.1-3.1L18.1 24L34 8.1L30.9 5L12 24z"
            stroke-width="1"
            stroke="#000"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={next}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          border: "none",
          borderRadius: "50%",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 20 20"
        >
          <path
            fill="#090202"
            d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"
            stroke-width="0.1"
            stroke="#090202"
          />
        </svg>
      </button>

      {/* Indicators */}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => goToIndex(index)}
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              margin: "0 5px",
              borderRadius: "50%",
              background: index === activeIndex ? "black" : "gray",
              cursor: "pointer",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CarousalCompo;
