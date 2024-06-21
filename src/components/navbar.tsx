import { Link } from "gatsby";
import * as React from "react";
import { navLinks, navLinkItem, navLinkText } from "./navbar.module.css";
import Typography from "./typography";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/">
            <Typography>Home</Typography>
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/blog">
            <Typography>Blog</Typography>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
