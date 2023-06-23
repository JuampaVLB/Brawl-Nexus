import { useEffect } from "react";
import styles from "../modules/About.module.css";
import Logo from "/img/logo.png";

import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div className={styles.container} id="about">
      <div className={styles.section}>
        <div className={styles.left} data-aos="fade-right">
          <h1 className={styles.first}>
            Sobre <span>Brawl Nexus</span>
          </h1>
          <p>
            Brawl Nexus es una comunidad enfocada a unir a los jugadores hispano
            hablantes de las regiones de SA y NA , pudiendo así ser el nexo de
            ambas, tenemos como propósito que este lugar sea lo más practico
            para el jugador competitivo a las hora de participar en torneos y lo
            más cómodo para los jugadores casuales que quieran pasar un rato a
            divertirse.
          </p>
        </div>
        <div className={styles.right} data-aos="fade-left">
          <img src={Logo} alt="Logo Brawl Nexus" />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.left} data-aos="fade-left">
          <h1>
            Nuestra <span>Comunidad</span>
          </h1>
          <p>
            En Brawl Nexus, nos esforzamos por crear una comunidad que sea
            acogedora y diversa, donde tanto los jugadores competitivos como los
            casuales encuentren su lugar. Valoramos el espíritu de juego limpio,
            el respeto mutuo y la diversión compartida.
          </p>
        </div>
        <div className={styles.right} data-aos="fade-right">
          <img src={Logo} alt="Logo Brawl Nexus" />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.left} data-aos="fade-right">
          <h1>
            <span>Requisitos</span> para Participar
          </h1>
          <p>
            En los torneos de Brawlhalla que organizamos, por lo general no hay
            requisitos excluyentes para participar. Esto significa que cualquier
            persona interesada, sin importar su nivel de habilidad, experiencia
            previa o edad, puede unirse y disfrutar de la competencia.
          </p>
        </div>
        <div className={styles.right} data-aos="fade-left">
          <img src={Logo} alt="Logo Brawl Nexus" />
        </div>
      </div>
    </div>
  );
}

export default About;
