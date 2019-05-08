import React from 'react';
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import AllArticles from "./AllArticles/AllArticles";
import AddArticle from "./AddArticle/AddArticle";
import SingleArticle from "./SingleArticle/SingleArticle";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg">
              <Link to="/">Codeus React App</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <NavBar />
            </nav>
          </div>
        </div>

        <Route exact path="/" component={ Home } />
        <Route path="/all-articles" component={ AllArticles } />
        <Route path="/article/:id" component={ SingleArticle } />
        <Route path="/add-article" component={ AddArticle } />

      </div>
      

    </Router>
  );
}

export default App;
