import React from "react";
import "../styles/global.css";
import "tailwindcss/index.css";
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-black p-4">
        <h1 className="text-2xl font-bold">Product Store</h1>
      </header>
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
};

export default Layout;
