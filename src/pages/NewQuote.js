import React, { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useNavigate } from "react-router-dom";
import useHttp from "../components/hooks/use-http";
import { addQuote } from "../components/lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const navigate = useNavigate();
  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes");
    }
  }, [status, navigate]);
  const quoteAddHandler = (quote) => {
    sendRequest(quote);
  };
  return (
    <div>
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={quoteAddHandler}
      />
    </div>
  );
};

export default NewQuote;
