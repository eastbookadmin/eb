import "./App.css";
import CardContents from "./main/index";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import ContentPage from "./content";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
