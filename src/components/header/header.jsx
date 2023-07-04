import React from "react";
import header from "./headerUtils/header.jpg";
import style from "./headerStyle.module.css";

const HeaderElem = () => {
  return (
    <header className={style.headerPicture}>
      <div
        style={{
          backgroundImage: `url(${header})`,
        }}
      >
        <p className={style.mainHeader}>
          Bezpieczne miejsce, dla twojego psiego przyjaciela
        </p>
      </div>
    </header>
  );
};

export default HeaderElem;
