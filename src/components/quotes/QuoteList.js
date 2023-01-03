import { Fragment } from "react";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
import { useHistory, useLocation } from "react-router-dom";
const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const { quotes } = props;
  const queryParams = new URLSearchParams(location.search);
  const sortingOrder = queryParams.get("sort");

  const changeOrder = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${sortingOrder === "asc" ? "desc" : "asc"}`,
    });
    if (sortingOrder === "asc") {
      quotes.sort((quoteX, quoteY) => (quoteX.id > quoteY.id ? 1 : -1));
    } else {
      quotes.sort((quoteX, quoteY) => (quoteX.id < quoteY.id ? 1 : -1));
    }
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeOrder}>
          Sort {sortingOrder === "asc" ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
