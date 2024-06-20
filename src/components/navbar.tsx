import { Link } from "gatsby";
import * as React from "react";
import { navLinks, navLinkItem, navLinkText } from "./navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            Home
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/blog" className={navLinkText}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
