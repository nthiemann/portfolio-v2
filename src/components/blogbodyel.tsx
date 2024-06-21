import React from "react";
import { background } from "./blogbodyel.module.css";

/**
 * @description This exists as a common body that can be referenced by any HeadApi component.
 * It's to get around gatsby's trash way of handling this tag.
 * @returns a `<body>` element appropriately styled for all blog pages.
 */
const BlogBodyEl: React.FC = () => {
  return <body className={background} />;
};

export default BlogBodyEl;
