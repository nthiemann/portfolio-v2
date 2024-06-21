import React, { ReactNode } from "react";
import { light, dark } from "./typography.module.css";

type Variant = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TypographyProps = {
  variant?: Variant;
  color?: "light" | "dark";
  children: ReactNode;
} & React.HTMLProps<HTMLElement>;

const colorMappings = {
  light: light,
  dark: dark,
};

const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  color = "light",
  children,
  ...rest
}) => {
  const variantEl = variant as keyof JSX.IntrinsicElements; // Ensure variant is a valid HTML tag

  return React.createElement(
    variantEl,
    { className: colorMappings[color], ...rest },
    children
  );
};

export default Typography;
