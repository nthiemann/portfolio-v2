import React from "react";

import { card } from "./card.module.css";

type CardProps = {
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className={card}>{children}</div>;
};

export default Card;
