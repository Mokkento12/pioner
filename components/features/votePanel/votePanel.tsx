import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { resetVotes, vote } from "../../../store/vote/voteSlice";

const VotePanel = () => {
  const candidates = useSelector((state: RootState) => state.vote);
  const dispatch = useDispatch();
  return (
    <div style={{ padding: 20 }}>
      <h2>Голосование</h2>
      <ul>
        {Object.entries(candidates).map(([id, votes]) => (
          <li key={id}>
            {id}:{votes} голосов{" "}
            <button onClick={() => dispatch(vote({ id }))}>Голосовать</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(resetVotes())}>Сбросить голоса</button>
    </div>
  );
};

export default VotePanel;
