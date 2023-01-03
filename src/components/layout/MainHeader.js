import React from "react";
import style from "./MainHeader.module.css";
import { NavLink } from "react-router-dom";
const MainHeader = () => {
  return (
    <nav className={style.header}>
      <div className={style.logo}>GreatQuotes</div>
      <div className={style.nav}>
        <ul>
          <li>
            <NavLink activeClassName={style.active} to={"/quotes"}>
              Quotes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={style.active} to="/new-quote">
              Add quote
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainHeader;
