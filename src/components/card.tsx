import React from "react";

import { card } from "./card.module.css";

type CardProps = React.HTMLProps<HTMLDivElement>;

const Card: React.FC<CardProps> = ({ children, ...rest }) => {
  return (
    <div className={card} {...rest}>
      {children}
    </div>
  );
};

export default Card;
