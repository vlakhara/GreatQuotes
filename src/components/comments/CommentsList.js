import CommentItem from "./CommentItem";
import classes from "./CommentsList.module.css";

const CommentsList = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment, i) => (
        <CommentItem key={`${comment.id}_${i}`} text={comment.commentData} />
      ))}
    </ul>
  );
};

export default CommentsList;
