import { useParams } from "react-router-dom";
import { getArticle, handleDownVote, handleUpVote } from "../api";
import { useState, useEffect } from "react";
import Comments from "./Comments";
import CommentAdder from "./CommentAdder";

const ArticleView = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [comments, setComments] = useState([]);


  const { article_id } = useParams();
  const { created_at } = useParams();

  useEffect(() => {
    getArticle(article_id).then((article) => {
      setLoading(false);
      setArticle(article);
    });
  }, []);

  if (loading) return <p>Loading...</p>


  const publishedDate = article.created_at
    ? article.created_at.slice(0, 10)
    : "";

    if (!article) {
      return (
        <div>
          <h2>Article not found</h2>
          <p>The requested article does not exist.</p>
        </div>
      );
    }

  return (
    <div>
      <section className="articleView">
        <h2 className="title">{article.title}</h2>
        <p className="author">Written by {article.author}</p>
        <img className="articleImg" src={article.article_img_url}></img>
        <p className="articleBody">{article.body}</p>
        <p className="votes">Vote: {article.votes}</p>
        <div className="voteButtons">
          <button
            className="upVoteButton"
            onClick={() => {
              setArticle({ ...article, votes: article.votes + 1 });
              handleUpVote(article_id).catch((error) => {
                setArticle({ ...article, votes: article.votes - 1 });
                setError(true);
              });
            }}
          >
            Up Vote!
          </button>
          <button
            className="downVoteButton"
            onClick={() => {
              setArticle({ ...article, votes: article.votes - 1 });
              handleDownVote(article_id).catch((error) => {
                setArticle({ ...article, votes: article.votes + 1 });

                setError(true);
              });
            }}
          >
            Down Vote!
          </button>
        </div>
        <p className="date">Published {publishedDate}</p>
      </section>
      <CommentAdder setComments={setComments} article_id={article_id}/>
      <Comments comments={comments} setComments={setComments}/>
    </div>
  );
};

export default ArticleView;
