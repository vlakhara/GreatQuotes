import { Route, Switch, Redirect } from "react-router-dom";
import Quotes from "./pages/Quotes";
import Quote from "./pages/Quote";
import NewQuote from "./pages/NewQuote";
import MainHeader from "./components/layout/MainHeader";
import { Fragment } from "react";
import Layout from "./components/layout/Layout";
import NoPageFound from "./pages/NoPageFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <Quotes />
        </Route>
        <Route path="/quotes/:id">
          <Quote />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NoPageFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
