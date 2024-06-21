import React from "react";
import Card from "./card";
import { navigate } from "gatsby";
import { cardwrapper } from "./postpreview.module.css";

type PostPreviewProps = {
  title?: string | null;
  date?: string | null;
  excerpt?: string | null;
  url: string;
};

const PostPreview: React.FC<PostPreviewProps> = ({
  title,
  date,
  excerpt,
  url,
}) => {
  const handleClick = () => {
    navigate(url);
  };

  return (
    <div className={cardwrapper}>
      <Card onClick={handleClick}>
        <article>
          {title && <h2>{title}</h2>}
          {date && <p>{date}</p>}
          {excerpt && <p>{excerpt}</p>}
        </article>
      </Card>
    </div>
  );
};

export default PostPreview;
