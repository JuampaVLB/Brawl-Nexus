import styles from "../modules/Loader.module.css";
import Logo from "/img/logo.png";
import Loading from "/img/loader.svg";

function Loader() {
  return (
    <div id={styles.container}>
      <img src={Logo} alt="Brawl Nexus" className={styles.logo} />
        <img src={Loading} alt="Cargando..." className={styles.loading} />
    </div>
  );
}

export default Loader;
