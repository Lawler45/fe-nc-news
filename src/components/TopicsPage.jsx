import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";
import { useParams } from "react-router-dom";
import SortBy from "./SortBy";
import NotFoundTopic from "./NotFoundTopic";

const TopicsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const { topic } = useParams();

  useEffect(() => {
    setLoading(true);
    getArticles(topic).then((data) => {
      setLoading(false);
      setArticles(data);
    });
  }, [topic]);

  const upperCaseTopic = topic.toUpperCase()

  if (topic === "coding" || topic === "football" || topic === "cooking") {
    return (
      <div>
        <div className="titleSortBy">
        <h3 className="title">{upperCaseTopic} NEWS</h3>
        <SortBy setArticles={setArticles} isTopicPage={true} topic={topic} />
        </div>
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
  } else {
    return <NotFoundTopic />;
  }
};

export default TopicsPage;
