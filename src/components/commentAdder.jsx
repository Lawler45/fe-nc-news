import { useState, useEffect, useContext } from "react";
import { UserContext } from "./userProvider";
import { postComment } from "../api";

const CommentAdder = ({ article_id }) => {
  const [comment, setComment] = useState();
  const [post, setPost] = useState({});
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const handleTyping = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPost({
      author: user,
      body: comment,
      votes: 0,
    });
    console.log(comment);
    postComment(article_id, user, comment);
    setComment("");
  };

  return (
    <form className="commentForm">
      <label htmlFor="comment">Add Comment:</label>
      <textarea id="comment" value={comment} onChange={handleTyping}></textarea>
      <button onClick={handleSubmit}>Submit!</button>
    </form>
  );
};

export default CommentAdder;
