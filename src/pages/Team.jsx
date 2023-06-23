import { useEffect, useState } from "react";

import styles from "../modules/Team.module.css";

import Logo from "/img/profile.webp";

import Carousel from "@itseasy21/react-elastic-carousel";

function Team() {
  const items = [
    { id: 1, title: "Roku", role: "CEO" },
    { id: 2, title: "MolceLancia", role: "CEO" },
    { id: 3, title: "Neoberlord", role: "CEO" },
    { id: 4, title: "El Cesarin", role: "Moderador" },
    { id: 5, title: "AidenWard", role: "Moderador STAR.GG" },
    { id: 6, title: "Shadowteca", role: "Moderador STAR.GG" },
    { id: 7, title: "Trimago", role: "Moderador STAR.GG" },
    { id: 8, title: "R1black", role: "Caster" },
    { id: 9, title: "Elthazar", role: "Caster" },
    { id: 10, title: "Kamatari", role: "Caster" },
    { id: 11, title: "KOR BESTO LEYENDA", role: "Caster" },
    { id: 12, title: "Lauty", role: "Caster" },
    { id: 13, title: "MitsuMaig", role: "Caster" },
    { id: 14, title: "Nevy", role: "Caster" },
    { id: 15, title: "Wesley1026", role: "Caster" },
    { id: 16, title: "Nitram", role: "Artista" },
    { id: 17, title: "Emi#8364", role: "Ayudante" },
  ];

  const getItemsToShow = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      return 1;
    } else if (windowWidth < 1200) {
      return 2;
    } else {
      return 3;
    }
  };

  const [itemsToShow, setItemsToShow] = useState(getItemsToShow());

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsToShow());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id={styles.container}>
      <div className={styles.carousel}>
        <p>Nuestro Equipo</p>
        <Carousel
          itemsToShow={itemsToShow}
          itemsToScroll={itemsToShow}
          pagination={false}
          itemPadding={[0, 10]}
        >
          {items.map((item) => (
            <div key={item.id} className={styles.profile}>
              <img
                src={Logo}
                alt="Profile Picture"
                className={styles.profile_picture}
              />
              <div>
                <p>{item.title}</p>
                <span
                  className={
                    item.role === "Moderador STAR.GG"
                      ? `${styles[item.role]} ${styles.star}`
                      : styles[item.role]
                  }
                >
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Team;
