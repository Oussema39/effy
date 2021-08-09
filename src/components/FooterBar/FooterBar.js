import React from "react";
import Logo from "../../assets/svgs/effy-logo.svg";

const FooterBar = () => {
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "2rem 0",
        borderRadius: "5px",
        background: "white",
        fontSize: ".8rem",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "3rem",
        }}
      >
        <img src={Logo} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "3rem",
          gap: "1rem",
        }}
      >
        <a style={{ color: "black", textDecoration: "none" }} href="#">
          JE SUIS UN PRO
        </a>
        <a style={{ color: "black", textDecoration: "none" }} href="#">
          NOUS CONNAÎTRE
        </a>
        <a style={{ color: "black", textDecoration: "none" }} href="#">
          ACTUALITÉS
        </a>
        <a style={{ color: "black", textDecoration: "none" }} href="#">
          NOUS REJOINDRE
        </a>
      </div>
      <div style={{ color: "black", fontSize: ".9rem" }}>
        <p style={{ textAlign: "center" }}>
          © 2019 - EFFY -{" "}
          <a style={{ color: "black" }} href="#">
            Mentions légales
          </a>
          {"  "}-{"  "}
          <a style={{ color: "black" }} href="#">
            Conditions Générales d’Accès au Réseau des Partenaires Effy
          </a>
          {"  "}-{"  "}
          <a style={{ color: "black" }} href="#">
            Conditions Générales d’Utilisation
          </a>
          {"  "}-{"  "}
          <a style={{ color: "black" }} href="#">
            Vie Privée
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBar;
