import { NavLink, useRouteMatch } from "react-router-dom";
import classes from "./QuoteItem.module.css";

const QuoteItem = (props) => {
  const match = useRouteMatch();
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <NavLink className="btn" to={`${match.path}/${props.id}`}>
        View Fullscreen
      </NavLink>
    </li>
  );
};

export default QuoteItem;
