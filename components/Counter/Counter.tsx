import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Счетчик обновился: ${count}`);
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
