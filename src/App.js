import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import {
  HomePage,
  Signup,
  Form,
  Dashboard,
  Contracts,
  Payment,
  Calendly,
  Upload,
  Signin,
  NotFound,

} from "./Containers";
import history from "./history"

const App = () => {
  return (
    <section className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/form" component={Form} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Signin} />
          <Route path="/contracts" component={Contracts} />
          <Route path="/payment" component={Payment} />
          <Route path="/calendly" component={Calendly} />
          <Route path="/upload" component={Upload} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </section>
  );
};

export default App;
