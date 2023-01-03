import React, { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../components/hooks/use-http";
import { getAllQuotes } from "../components/lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const Quotes = () => {
  const {
    sendRequest,
    status,
    data: quotes,
    error,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (status === "completed" && (!quotes || quotes.length === 0)) {
    return <NoQuotesFound />;
  }
  return <QuoteList quotes={quotes} />;
};

export default Quotes;
