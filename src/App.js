import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const Quote = React.lazy(() => import("./pages/Quote"));
const Comments = React.lazy(() => import("./components/comments/Comments"));
const NoPageFound = React.lazy(() => import("./pages/NoPageFound"));
const Quotes = React.lazy(() => import("./pages/Quotes"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/quotes" />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/quotes/:id/" element={<Quote />}>
            <Route path={`comments`} element={<Comments />} />
          </Route>
          <Route path="/new-quote" element={<NewQuote />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
