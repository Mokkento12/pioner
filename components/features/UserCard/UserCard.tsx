import { useState } from "react";

type UserCardProps = {
  name: string;
  age: number;
};

const UserCard: React.FC<UserCardProps> = ({ name, age }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const toggleDetails = () => setShowDetails((prev) => !prev);
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h3>{name}</h3>
      <button onClick={toggleDetails}>
        {showDetails ? "Скрыть" : "Показать детали"}
      </button>
      {showDetails && (
        <div style={{ marginTop: "0.5rem" }}>
          <p>Возраст:{age}</p>
        </div>
      )}
    </div>
  );
};

export default UserCard;
