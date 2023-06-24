import { useEffect, useState } from "react";

import styles from "../modules/Team.module.css";

import Carousel from "@itseasy21/react-elastic-carousel";

function Team() {
  const items = [
    { id: 1, title: "Roku", role: "Fundador", img: "roku" },
    { id: 2, title: "MolceLancia", role: "Fundador", img: "molce" },
    { id: 3, title: "Neoberlord", role: "Fundador", img: "neo" },
    { id: 4, title: "AidenWard", role: "Mod STAR.GG", img: "aiden" },
    {
      id: 5,
      title: "Shadowteca",
      role: "Mod STAR.GG",
      img: "shadowteca",
    },
    { id: 6, title: "Trimago", role: "Mod STAR.GG", img: "trimago" },
    { id: 7, title: "R1black", role: "Caster", img: "riblack" },
    { id: 8, title: "Elthazar", role: "Caster", img: "elthazar" },
    { id: 9, title: "Kamatari", role: "Caster", img: "kamatari" },
    { id: 10, title: "KOR BESTO LEYENDA", role: "Caster", img: "kor" },
    { id: 11, title: "Lauty", role: "Caster", img: "lauty" },
    { id: 12, title: "MitsuMaig", role: "Caster", img: "mitsu" },
    { id: 13, title: "Nevy", role: "Caster", img: "nevy" },
    { id: 14, title: "Wesley", role: "Caster", img: "wesley" },
    { id: 15, title: "El Cesarin", role: "Moderador", img: "cesarin" },
    { id: 16, title: "Nitram", role: "Artista", img: "nitram" },
    { id: 17, title: "Emi", role: "Ayudante", img: "emi" },
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
                src={`/img/${item.img}.webp`}
                alt="Profile Picture"
                className={styles.profile_picture}
              />
              <div>
                <p>{item.title}</p>
                <span
                  className={
                    item.role === "Mod STAR.GG"
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
