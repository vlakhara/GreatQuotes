import React, { Fragment } from "react";
import style from "./Layout.module.css";
import MainHeader from "./MainHeader";
const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main className={style.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
