import { useParams } from "react-router-dom";
import { getArticle, handleDownVote, handleUpVote } from "../api";
import { useState, useEffect } from "react";
import axios from "axios";
<<<<<<< HEAD
import Comments from "./Comments.jsx";
=======
import Comments from "./comments";
>>>>>>> vote

const ArticleView = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { article_id } = useParams();
<<<<<<< HEAD

  useEffect(() => {
    setLoading(true);
=======
  const { created_at } = useParams();

  useEffect(() => {
>>>>>>> vote
    getArticle(article_id).then((article) => {
      setLoading(false);
      setArticle(article);
    });
  }, []);

  if (loading) return <p>Loading...</p>


  const publishedDate = article.created_at
    ? article.created_at.slice(0, 10)
    : "";

<<<<<<< HEAD
  const handleUpVote = () => {
    const apiUrl = `https://lawler-news.onrender.com/api/articles/${article_id}`;

    axios
      .patch(apiUrl)
      .then((response) => {
        const updatedVotes = votes + 1;
        setVotes(updatedVotes);
      })
      .catch((error) => {
        console.error(error, "Error upvoting article");
      });
  };

  return (
    <div>
    <section className="articleView">
      <h2 className="title">{article.title}</h2>
      <p className="author">Written by {article.author}</p>
      <img className="articleImg"src={article.article_img_url}></img>
      <p className="articleBody">{article.body}</p>
      <p className="votes">Vote: {votes}</p>
      <button className="voteButton"onClick={handleUpVote}>Up Vote!</button>
      <p className="date">Published {publishedDate}</p>
    </section>
    <Comments />
=======
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
      <Comments />
>>>>>>> vote
    </div>
  );
};

export default ArticleView;
