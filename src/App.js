import classes from "./components/App.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Support from "./components/Support";
import Article from "./components/Article";
import Join from "./components/Join";
import Interns from "./components/Interns";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <Main />
            </>
          )}
        />

        <Route path="/Article" component={Article} />
        <Route path="/Interns" component={Interns} />
        <Route path="/Support" component={Support} />
        <Route path="/Join" component={Join} />
        <Footer className={classes.footer} />
      </div>
    </Router>
  );
}

export default App;
