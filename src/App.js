import "./App.css";
import React from "react";
import MainPageComponent from "./main";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import ArtPage from "./art";

function App() {
  return (
    <div>
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
  );
}

export default App;
