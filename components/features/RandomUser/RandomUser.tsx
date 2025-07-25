import { useState, useEffect } from "react";

type User = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
};

const RandomUser: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://randomuser.me/api");
        const data = await response.json();
        const person = data.results[0];
        setUser(person);
      } catch (error) {
        console.error("Ошибка при загрузке пользователя:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  return (
    <div style={{ border: "1px solid #ccc", padding: 16, maxWidth: 300 }}>
      {user && (
        <>
          <img src={user.picture.large} alt="User" style={{ width: "100%" }} />
          <h3>
            {user.name.first} {user.name.last}
          </h3>
          <p>{user.email}</p>
        </>
      )}
    </div>
  );
};

export default RandomUser;
