import styles from "../modules/Footer.module.css";
import Logo from "/img/logo.png";

function Footer() {
  return (
    <footer className={styles.footer} id="team">
      <main className={styles.main}>
        <img src={Logo} alt="Logo Brawl Nexus" />
        <div className={styles.info}>
          <div>
            <span>Contacto</span>
            <p className={styles.email_text}>brawlnexus2021@gmail.com</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={styles.email_svg}
            >
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
            </svg>
          </div>
          <div>
            <span>Informacion</span>
            <p>Nosotros</p>
            <p>Blog</p>
            <p>Faq</p>
          </div>
        </div>
      </main>
      <div className={styles.end}>
        <p>2023 © Brawl Nexus Inc. - Todos los derechos reservados</p>
        <p>
          Desarrollado por Juan Pablo Villalba | contact.juampavlb@gmail.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
