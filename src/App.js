import { Route, Switch } from "react-router-dom";
import Support from "./components/Support";
import Article from "./components/Article";
import Join from "./components/Join";
import Interns from "./components/Interns";
import Homepage from "./components/Homepage";
import PageDontExist from "./components/PageDontExist";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/Article" component={Article} />
        <Route path="/Interns" component={Interns} />
        <Route path="/Support" component={Support} />
        <Route path="/Join" component={Join} />
        <Route component={PageDontExist} />
      </Switch>
    </div>
  );
}

export default App;
