import React from "react";
import Header from "./Header.jsx";
import Navbarfunc from "./Navbar/Navbar.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout({news, loading}) {
  return (
    <>
      <Header />
      <Navbarfunc news={news} loading={loading}/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
