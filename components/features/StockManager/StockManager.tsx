import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { add, remove, reset } from "../../../store/stock/stockSlice";
import { useState } from "react";

const StockManager = () => {
  const count = useSelector((state: RootState) => state.stock.count);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  return (
    <div style={{ padding: 20 }}>
      <h3>Товары на складе:</h3>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        style={{ marginRight: 10 }}
      />
      <button onClick={() => dispatch(add(value))}>Добавить</button>
      <button onClick={() => dispatch(remove())}>Убрать</button>
      <button onClick={() => dispatch(reset())}>Сброс</button>
    </div>
  );
};

export default StockManager;
