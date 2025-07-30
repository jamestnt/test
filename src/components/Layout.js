import React from "react";
import "../styles/global.css";
import "tailwindcss/index.css";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#410088]">
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
};

export default Layout;
