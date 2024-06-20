import React from "react";
import Card from "./card";

type PostPreviewProps = {
  title?: string | null;
  date?: string | null;
  excerpt?: string | null;
};

const PostPreview: React.FC<PostPreviewProps> = ({ title, date, excerpt }) => {
  return (
    <Card>
      <article>
        {title && <h2>{title}</h2>}
        {date && <p>{date}</p>}
        {excerpt && <p>{excerpt}</p>}
      </article>
    </Card>
  );
};

export default PostPreview;
