import classes from "./components/App.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { Route } from "react-router-dom";
import Support from "./components/Support";
import Article from "./components/Article";
import Join from "./components/Join";
import Interns from "./components/Interns";

function App() {
  return (
    <div className="App">
      <Header />

      <Route path="/" exact component={Main} />
      <Route path="/Article" component={Article} />
      <Route path="/Interns" component={Interns} />
      <Route path="/Support" component={Support} />
      <Route path="/Join" component={Join} />
      <Footer className={classes.footer} />
    </div>
  );
}

export default App;
