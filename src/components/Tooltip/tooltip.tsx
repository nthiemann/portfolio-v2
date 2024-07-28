import React from "react";
import * as styles from "./tooltip.module.css";

interface TooltipProps {
  children: React.ReactNode;
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  return (
    <div className={styles.tooltip}>
      <span className={styles.tooltiptext}>{text}</span>
      {children}
    </div>
  );
};

export default Tooltip;
