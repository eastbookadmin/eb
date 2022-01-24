import "antd/dist/antd.css";
import "./App.css";
import CardContents from "./main/index";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UploadPage from "./upload";
import ContentPage from "./content";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <Link to="/">
          <img id="main-logo" src="/images/logo/logo-main.png" />
        </Link>
        <div id="head-menu">
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            onClick={function () {
              history.push("/upload");
            }}
          >
            Upload DB
          </Button>
        </div>
      </div>

      <Switch>
        <Route exact={true} path="/">
          <CardContents />
        </Route>
        <Route exact={true} path="/contents/:id">
          <ContentPage />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </Switch>

      <div id="footer"></div>
    </div>
  );
}

export default App;
