import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content container m-4 w-100 overflow-hidden">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
