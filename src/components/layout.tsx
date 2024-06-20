import * as React from "react";
import Navbar from "./navbar";
import { pageStyles } from "../styles";
import { container, heading } from "./layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
  pageTitle: string;
};

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <Navbar />
      <main style={pageStyles}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
