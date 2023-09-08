import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";
import { useParams } from "react-router-dom";
import SortBy from "./SortBy";



const TopicsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const { topic } = useParams();

  useEffect(() => {
    setLoading(true);
    getArticles(topic).then(
      (data) => {
        setLoading(false);
        setArticles(data);
      }
    );
  }, [topic]);

  return (
    <div>
        <h3 className="topic title">{topic} news</h3>
        <SortBy  setArticles={setArticles} isTopicPage={true} topic={topic}/>
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

export default TopicsPage;