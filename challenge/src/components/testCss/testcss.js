import React, { useState } from "react";

const Test = ({ filled = true, size = 60, color = "#0ff" }) => {
  const [isFilled, setIsFilled] = useState(filled);

  // Стили для звезды (CSS-in-JS)
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    cursor: "pointer",
    transition: "all 0.3s ease",
    filter: isFilled 
      ? `drop-shadow(0 0 5px ${color}) drop-shadow(0 0 10px ${color})` 
      : "none",
    opacity: isFilled ? 1 : 0.3,
  };

  // SVG-путь для пятиконечной звезды
  const starPath = "M50 0 L61 35 L98 35 L68 57 L79 92 L50 70 L21 92 L32 57 L2 35 L39 35 Z";

  return (
    <svg
      className="neon-star"
      viewBox="0 0 100 100"
      style={starStyle}
      onClick={() => setIsFilled(!isFilled)}
    >
      <path 
        d={starPath} 
        fill={isFilled ? color : "transparent"} 
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

export default Test;

