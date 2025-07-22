import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("count");
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div>
      <h2>Счетчик: {count}</h2>
      <button onClick={decrement}>Минус</button>
      <button onClick={increment}>Плюс</button>
    </div>
  );
};

export default Counter;
