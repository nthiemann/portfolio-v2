import { Link } from "gatsby";
import * as React from "react";
import { navLinks, navLinkItem, gitIcon } from "./navbar.module.css";
import Typography from "../Typography/typography";
import GithubIcon from "../assets/github-mark-white.svg";
import config from "../../../config.json";

const GITHUB_LINK = config.github_link;

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
        <li>
          <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
            {/* <GithubIcon className={gitIcon}></GithubIcon> */}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
