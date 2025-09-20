import React from "react";
import Sidebar from "./components/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <aside>
        <Sidebar />
      </aside>

      {children}
    </main>
  );
};

export default Layout;
