import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";
import  HomePageSortBy  from "./SortHomeArticles";

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    getArticles().then(
      (data) => {
        setLoading(false);
        setArticles(data);
      }
    );
  }, []);

  return (
    <div>
    <h3 className="title">Home Page</h3>
    <HomePageSortBy setArticles={setArticles} />
<section className="articleContainer">
  {articles.map((article) => {
    return (
      <ArticleCard
        key={article.article_id}
        article_id={article.article_id}
        title={article.title}
        article_img_url={article.article_img_url}
        author={article.author}
        votes={article.votes}
        comment_count={article.comment_count}
        created_at={article.created_at}
        topic={article.topic}
      />
    );
  })}
</section>
</div>
  );
};

export default HomePage;
