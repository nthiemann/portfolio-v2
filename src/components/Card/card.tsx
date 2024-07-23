import React from "react";

import { card } from "./card.module.css";

type CardProps = React.HTMLProps<HTMLDivElement>;

const clickableStyle: React.CSSProperties = {
  cursor: "pointer",
};
const Card: React.FC<CardProps> = ({ children, ...rest }) => {
  const clickable = rest.onClick != undefined;

  return (
    <div
      className={card}
      style={clickable ? clickableStyle : undefined}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
