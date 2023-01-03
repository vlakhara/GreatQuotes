import React, { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../components/hooks/use-http";
import { getSingleQuote } from "../components/lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
const Quote = () => {
  const {
    sendRequest,
    status,
    data: quote,
    error,
  } = useHttp(getSingleQuote, true);
  const match = useRouteMatch();
  const params = useParams();

  useEffect(() => {
    sendRequest(params.id);
  }, [sendRequest, params.id]);

  const backBtn = (
    <div className="centered">
      <Link className="btn--flat" to="/quotes">
        Go back
      </Link>
    </div>
  );
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return (
      <>
        <p className="centered focused">{error}</p>
        {backBtn}
      </>
    );
  }
  if (!quote.text) {
    return (
      <>
        <p className="centered focused">No quote found</p>
        {backBtn}
      </>
    );
  }
  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default Quote;
