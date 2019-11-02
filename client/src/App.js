import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Search} />
          {/* <Route exact path="/saved" component={Saved} /> */}

          {/* <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
