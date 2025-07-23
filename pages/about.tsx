import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/queries/characters";
import Layout from "../components/Layout";
import Todo from "../components/features/ToDo/ToDo";
import Counter from "../components/features/Counter/Counter";
import UserCard from "../components/features/UserCard/UserCard";
import ThemeSwitcher from "../components/features/ThemeSwitcher/ThemeSwitcher";
import Timer from "../components/features/Timer/Timer";
import NetworkStatus from "../components/features/NetworkStatus/NetworkStatus";

const AboutPage = () => {
  const { data, loading, error } = useQuery(GET_CHARACTERS);

  if (loading) return <Layout title="Загрузка...">Загрузка...</Layout>;
  if (error) return <Layout title="Ошибка">Ошибка: {error.message}</Layout>;

  return (
    <Layout title="Наши сотрудники">
      <h1>Наши сотрудники</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {data.characters.results.map((char: any) => (
          <div
            key={char.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "8px",
              textAlign: "center",
              background: "#f9f9f9",
            }}
          >
            <img
              src={char.image}
              alt={char.name}
              style={{ borderRadius: "50%", width: "100px" }}
            />
            <h3>{char.name}</h3>
            <p>Статус: {char.status}</p>
          </div>
        ))}
      </div>

      <div>
        <Todo />
        <Counter />
        <UserCard name="Alex" age={34} />
        <UserCard name="Mary" age={25} />
        <ThemeSwitcher />
        <Timer />
        <NetworkStatus />
      </div>
    </Layout>
  );
};

export default AboutPage;
