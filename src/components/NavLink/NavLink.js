import React from "react";
import Classes from "./NavLink.module.css";
import { GrDown } from "react-icons/gr";

const NavLink = ({ link }) => {
  return (
    <React.Fragment>
      {link.children ? (
        <div className={Classes.navLink}>
          <a href="#">{link.text}</a>
          <div className={Classes.chevron}>
            <GrDown fontSize=".7rem" />
          </div>
        </div>
      ) : (
        <div className={Classes.navLink}>
          <a href={link.url}>{link.text}</a>
        </div>
      )}
    </React.Fragment>
  );
};

export default NavLink;
