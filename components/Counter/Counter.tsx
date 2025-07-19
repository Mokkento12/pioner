import { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

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
