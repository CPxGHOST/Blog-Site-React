import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Components/home/HomePage";
import AboutPage from "./Components/about/AboutPage";
import AddBlog from "./Components/addBlog/AddBlog";
import Header from "./Components/common/Header";
import PageNotFound from "./Components/common/PageNotFound";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/add/:id" component={AddBlog} />
        <Route path="/add" component={AddBlog} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
