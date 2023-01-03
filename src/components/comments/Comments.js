import { useState, useEffect, useCallback } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "../comments/CommentsList";
import { useParams } from "react-router-dom";
import { getAllComments } from "../lib/api";
const Comments = () => {
  const {
    sendRequest,
    status,
    data: allComments,
    error,
  } = useHttp(getAllComments);
  let comments;
  const params = useParams();
  const { id: quoteId } = params;
  const [isAddingComment, setIsAddingComment] = useState(false);
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const addCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    comments = <p className="centered">{error}</p>;
  }

  if (status === "completed" && (!allComments || allComments.length === 0)) {
    comments = <p className="centered">No comments</p>;
  }

  if (status === "completed" && allComments && allComments.length > 0) {
    comments = <CommentsList comments={allComments} />;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm id={params.id} onCommentAdd={addCommentHandler} />
      )}
      {comments}
    </section>
  );
};

export default Comments;
