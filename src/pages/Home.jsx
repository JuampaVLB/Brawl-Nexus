import styles from "../modules/Home.module.css";
import Navbar from "../components/Navbar";
import Insignia from "/img/remove.png";
import pow1 from "/img/pow1.png";
import pow2 from "/img/pow2.png";

function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.top}>
        <div className={styles.left}>
        <h1>Comienza tu viaje en el circuito de competiciones en <span className={styles.title}>Brawl Nexus</span> con la mejor experiencia!</h1>
        <div className={styles.buttons}>
          <button>Como Inscribirse</button>
          <button>Contacto</button>
        </div>
       
        </div>
        <img src={Insignia} alt="" />
      
      </div>
      <div className={styles.bottom}>
      <p>Powered By</p>
      <div>
        <img src={pow1} alt="" />
        <img src={pow2} alt="" />
      </div>
      </div>
    </div>
  );
}

export default Home;
