import { useState, useEffect } from "react";

const NetworkStatus: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
  }, []);

  return (
    <div>
      <h2>Статус сети:</h2>
      <p style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "🟢 Онлайн" : "🔴 Оффлайн"}
      </p>
    </div>
  );
};

export default NetworkStatus;
