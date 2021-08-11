import logo from "./logo.svg";
import "./App.css";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Switch> */}
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
