import "./App.css";
import React from "react";
import MainPageComponent from "./main";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UploadPage from "./upload";
import ArtPage from "./art";
import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/mamulogo2.png" alt="mamu logo" />
          </Link>
          <Button
            size="large"
            onClick={function() {
              history.push("/upload");
            }}
            icon={<UploadOutlined />}
          >
            Upload My Art
          </Button>
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
