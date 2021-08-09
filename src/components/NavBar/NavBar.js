import React from "react";
import NavLink from "../NavLink/NavLink";
import Classes from "./NavBar.module.css";
import Logo from "../../assets/svgs/effy-logo.svg";
import { MdPermIdentity } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";

const NavBar = () => {
  const links = [
    {
      text: "NOS OFFRES",
      url: "#",
      children: [
        {
          text: "isoler ma maison",
          url: "#",
        },
        {
          text: "installer une pompe a chaleur",
          url: "#",
        },
        {
          text: "poser des panneaux solaires",
          url: "#",
        },
        {
          text: "remplacer ma vielle chaudiere",
          url: "#",
        },
        {
          text: "demander ma Prime Effy",
          url: "#",
        },
      ],
    },
    {
      text: "GUIDE DE LA RÉNOVATION",
      url: "#",
    },
    {
      text: "QUI SOMMES-NOUS ?",
      url: "#",
      children: [
        {
          text: "nous connaitre",
          url: "",
        },
        {
          text: "notre actualité",
          url: "",
        },
      ],
    },
  ];

  return (
    <nav className={Classes.signInNavBar}>
      <div
        style={{ display: "flex", alignItems: "center" }}
        className="leftSide"
      >
        <div className={Classes.signInNavbarLogo}>
          <img src={Logo} alt="" />
        </div>
        <div className={Classes.signInNavbarLinks}>
          {links.map((link) => (
            <NavLink key={link.text} link={link} />
          ))}
        </div>
      </div>
      <div className={Classes.signInNavBarSignForms}>
        <div className={Classes.espacePro}>
          <GrUserWorker fontSize="1rem" />
          <span className={Classes.linkSpan}>Espace pro</span>
        </div>
        <div className={Classes.espaceClient}>
          <MdPermIdentity fontSize="1.2rem" />
          Espace Client
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
