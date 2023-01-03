import { Route, Routes, Navigate } from "react-router-dom";
import Quotes from "./pages/Quotes";
import Quote from "./pages/Quote";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import NoPageFound from "./pages/NoPageFound";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/quotes" />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/quotes/:id/" element={<Quote />}>
          <Route path={`comments`} element={<Comments />} />
        </Route>
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
