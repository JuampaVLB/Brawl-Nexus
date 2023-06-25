import styles from "../modules/Home.module.css";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Inicio Brawl Nexus</h1>
    </div>
  );
}

export default Home;
