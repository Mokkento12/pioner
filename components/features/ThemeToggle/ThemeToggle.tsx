import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { toggleTheme } from "../../../store/slices/theme/themeSlice";

const ThemeToggle = () => {
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      style={{
        background: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        padding: 20,
      }}
    >
      <p>Theme:{theme}</p>
      <button onClick={() => dispatch(toggleTheme())}>Сменить тему</button>
    </div>
  );
};

export default ThemeToggle;
