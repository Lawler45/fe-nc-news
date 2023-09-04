import { getComments } from "./api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState([]);

  const { article_id } = useParams();


  useEffect(() => {
    getComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, [comments]);

  return (
    <section className="commentsContainer">
{comments.map((comment) => {
  return (
    <section className="individualComment">
    <p>Posted by {comment.author}</p>
    <p className="comment">{comment.body}</p>
    <p>Votes: {comment.votes}</p>
    </section>
  )
})}
    </section>
  )
}

export default Comments
