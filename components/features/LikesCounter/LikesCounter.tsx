import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import {
  increment,
  decrement,
  reset,
  addByAmount,
} from "../../../store/likes/likesSlice";

const LikesCounter = () => {
  const count = useSelector((state: RootState) => state.likes.count);
  const dispatch = useDispatch();
  return (
    <div style={{ padding: 30 }}>
      <h2>LIkes:{count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(addByAmount(5))}>+5</button>
    </div>
  );
};

export default LikesCounter;
