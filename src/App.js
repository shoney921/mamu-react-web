import "./App.css";
import React from "react";
import MainPageComponent from "./main";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import ArtPage from "./art";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/mamulogo2.png" alt="mamu logo" />
          </Link>
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainPageComponent />
          </Route>
          <Route exact={true} path="/arts/:id">
            <ArtPage />
          </Route>
          <Route exact={true} path="/upload">
            <UploadPage />
          </Route>
        </Switch>
      </div>

      <div id="footer"></div>
    </div>
  );
}

export default App;
