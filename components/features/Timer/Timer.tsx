import React, { useEffect, useState } from "react";

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(0); // состояние счётчика
  const [isRunning, setIsRunning] = useState(false); // состояние "идёт/пауза"

  // useEffect для запуска таймера
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // Очистка интервала при остановке
    return () => clearInterval(interval);
  }, [isRunning]); // зависит от isRunning — при изменении запускается заново

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Таймер: {seconds} сек</h2>
      <button onClick={toggleTimer}>{isRunning ? "Пауза" : "Старт"}</button>
      <button onClick={resetTimer} style={{ marginLeft: "1rem" }}>
        Сброс
      </button>
    </div>
  );
};

export default Timer;
