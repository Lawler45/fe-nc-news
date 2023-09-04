import { Link } from "react-router-dom";

const ArticleCard = (prop) => {
  return (
    <Link to={`/articles/${prop.article_id}`}>
      <div className="articleCard">
        <h2>{prop.title}</h2>
        <p>Written by {prop.author}</p>
        <img src={prop.article_img_url}></img>
        <p>Comments: {prop.comment_count}</p>
        <p>Votes: {prop.votes}</p>
        <p>Published: {prop.created_at}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
