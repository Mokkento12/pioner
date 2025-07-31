import { useDispatch, useSelector } from "react-redux";
import { play, pause, setTrack, stop } from "../../../store/player/playerSlice";
import { RootState } from "../../../store";

const AudioPlayer = () => {
  const dispatch = useDispatch();
  const currentTrack = useSelector(
    (state: RootState) => state.player.currentTrack
  );
  const isPlaying = useSelector((state: RootState) => state.player.isPlaying);

  const playTrack = (track: string) => {
    dispatch(setTrack(track));
  };

  return (
    <div>
      <h2>Мини-аудиоплеер:</h2>
      <p>Текущий трек: {currentTrack || "ничего не играет"}</p>
      <p>Статус: {isPlaying ? "Воспроизведение" : "Пауза / Остановлено"}</p>

      <button onClick={() => playTrack("lofi-beats.mp3")}>
        ▶️ Воспроизвести Lofi
      </button>
      <button onClick={() => dispatch(pause())}>⏸️ Пауза</button>
      <button onClick={() => dispatch(stop())}>⏹ Остановить</button>
    </div>
  );
};

export default AudioPlayer;
