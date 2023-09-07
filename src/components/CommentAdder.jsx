import { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserProvider";
import { postComment } from "../api";

const CommentAdder = ({ article_id, setComments }) => {
  const [comment, setComment] = useState({author: '', body: '', votes:0});
  const { user } = useContext(UserContext);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTyping = (event) => {
    setComment({author: user, body:event.target.value, votes:0});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!disabled) {
      setComments((currentComments) => [comment, ...currentComments]);
      postComment(article_id, comment.author, comment.body,)
      setComment("");
      setDisabled(true);
    }
  };

  return (
    <form className="commentForm">
      <label className= 'commentLabel' htmlFor="comment">Add Comment:</label>
      <textarea className="commentInput" value={comment.body} onChange={handleTyping}></textarea>
      <button className="commentBtn" onClick={handleSubmit} disabled={disabled}>
        {disabled ? "Posting..." : "Submit!"}
      </button>
    </form>
  );
};

export default CommentAdder;
