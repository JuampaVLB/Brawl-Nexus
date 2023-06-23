import styles from "../modules/Home.module.css";
import Navbar from "../components/Navbar";

import Banner from "/img/banner2.png";

function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <img src={Banner} alt="Banner Presentacion" className={styles.img} />
    </div>
  );
}

export default Home;
