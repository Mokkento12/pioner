import Image from "next/image";
import styles from "./Map.module.sass";

const Map = () => {
  return (
    <div className={styles.map}>
      <div className={styles.mapContainer}>
        <h3 className={styles.title}>Представительства</h3>
        <Image width={1180} height={715} src={"/images/map.png"} alt="Map" />
      </div>
    </div>
  );
};

export default Map;
