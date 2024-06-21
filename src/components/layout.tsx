import * as React from "react";
import Navbar from "./navbar";
import { container, background, heading } from "./layout.module.css";
import Typography from "./typography";

type LayoutProps = {
  children: React.ReactNode;
  pageTitle?: string;
};

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div className={background}>
      <Navbar />
      <main className={container}>
        {pageTitle && (
          <Typography className={heading} variant="h1">
            {pageTitle}
          </Typography>
        )}
        {children}
      </main>
    </div>
  );
};

export default Layout;
