import { useState, useEffect, useRef } from "react";

const ClickCounter: React.FC = () => {
  const [clicks, setClicks] = useState(0);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = () => {
      setClicks((prev) => prev + 1);
    };

    const box = boxRef.current;

    if (box) {
      box.addEventListener("click", handleClick);
    }

    return () => {
      if (box) {
        box.removeEventListener("click", handleClick);
      }
    };
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Кликов по экрану: {clicks}</h2>
      <div
        ref={boxRef}
        style={{
          width: "300px",
          height: "150px",
          backgroundColor: "#d1e7dd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          borderRadius: "8px",
        }}
      >
        Нажми сюда
      </div>
    </div>
  );
};

export default ClickCounter;
