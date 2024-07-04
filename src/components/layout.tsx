import * as React from "react";
import Navbar from "./navbar";
import { container, heading } from "./layout.module.css";
import Typography from "./typography";
import * as CSS from "csstype";

type LayoutProps = {
  children: React.ReactNode;
  pageTitle?: string;
  maxWidth?: CSS.Properties["maxWidth"];
};

/**
 *
 * @description Standard common page layout with title and styling
 * @param pageTitle The title to render at the top of the page
 * @param maxWidth The maximum width, in pixels, of the page content.
 */
const Layout: React.FC<LayoutProps> = ({ pageTitle, maxWidth, children }) => {
  return (
    <div>
      <Navbar />
      <main
        className={container}
        style={maxWidth != undefined ? { maxWidth } : undefined}
      >
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
