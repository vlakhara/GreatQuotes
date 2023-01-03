import { useEffect, useRef } from "react";

import classes from "./NewCommentForm.module.css";
import useHttp from "../hooks/use-http";
import { addComment } from "../lib/api";

const NewCommentForm = (props) => {
  const { sendRequest, status, error } = useHttp(addComment);
  const commentTextRef = useRef();
  const { onCommentAdd } = props;
  useEffect(() => {
    onCommentAdd();
  }, [status, error, onCommentAdd]);
  const submitFormHandler = (event) => {
    event.preventDefault();
    const text = commentTextRef.current.value;
    sendRequest({ quoteId: props.id, text });
    commentTextRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn" type="submit">
          Add Comment
        </button>
      </div>
    </form>
  );
};

export default NewCommentForm;
