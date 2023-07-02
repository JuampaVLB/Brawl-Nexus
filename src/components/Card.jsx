import styles from "../modules/Card.module.css";
import torneo from "/img/nextstage.jpg";

function Card() {
  return (
    <div className={styles.container} id="probando">
      <img src={torneo} alt="torneo" />
      <div className={styles.info}>
        <span>Next Stage #12</span>
        <p>Online (BRZ)</p>
        <p>Jul 14, 2023 7:00pm - 11:00pm</p>
        <p>Prize Pool $100</p>
      </div>
      <button>Registrarse</button>
    </div>
  );
}

export default Card;
