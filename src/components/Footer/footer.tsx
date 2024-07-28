import React from "react";
import Typography from "../Typography/typography";
import * as styles from "./footer.module.css";
import { LinkedInGradientIcon, GithubGradientIcon } from "../../assets/icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Typography>Contact: </Typography>
      <a href="mailto:nathiemann1@gmail.com">nathiemann1@gmail.com</a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/nick-thiemann-386131192/"
      >
        <LinkedInGradientIcon className={styles.lin} />
      </a>
      <a target="_blank" href="https://www.github.com/nthiemann">
        <GithubGradientIcon />
      </a>
    </div>
  );
};

export default Footer;
