import { useParams } from "react-router-dom";
import { getArticle } from "./api";
import { useState, useEffect } from "react";
import axios from "axios";
import Comments from "./comments";


const ArticleView = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);
  const [votes, setVotes] = useState(0);

  const { article_id } = useParams();
  const { created_at } = useParams();


  useEffect(() => {
    setLoading(true);
    getArticle(article_id).then((article) => {
      setLoading(false);
      setArticle(article);
    });
  }, []);

  const publishedDate = article.created_at
    ? article.created_at.slice(0, 10)
    : "";

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

  const handleDownVote = () => {
    const apiUrl = `https://lawler-news.onrender.com/api/articles/${article_id}`;

    axios
      .patch(apiUrl)
      .then((response) => {
        const updatedVotes = votes - 1;
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
      <div className="voteButtons">
      <button className="upVoteButton" onClick={handleUpVote}>Up Vote!</button>
      <button className="downVoteButton" onClick={handleDownVote}>Down Vote!</button>
      </div>
      <p className="date">Published {publishedDate}</p>
      </section>
      <Comments />
    </div>
  );
};

export default ArticleView;
