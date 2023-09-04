import { Link } from "react-router-dom";

const ArticleCard = (prop) => {
    const date = prop.created_at.slice(0, 10)
  return (
    <Link to={`/articles/${prop.article_id}`}>
      <div className="articleCard">
        <h2>{prop.title}</h2>
        <p>Written by {prop.author}</p>
        <img src={prop.article_img_url}></img>
        <p>Comments: {prop.comment_count}</p>
        <p>Votes: {prop.votes}</p>
        <p>Published: {date}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
