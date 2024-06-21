import React from "react";
import Card from "./card";
import { navigate } from "gatsby";
import Typography from "./typography";

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
    <Card onClick={handleClick}>
      <article>
        {title && <Typography variant="h2">{title}</Typography>}
        {date && <Typography variant="p">{date}</Typography>}
        {excerpt && <Typography variant="p">{excerpt}</Typography>}
      </article>
    </Card>
    // </div>
  );
};

export default PostPreview;
