import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "./pages/HomePage"
import "./App.css";
import SignupForm from "./component/SignupForm";
import LoginForm from "./component/LoginForm"
export function App() {

	return (
<Router>
   <Switch>
	<Route exact="/" component={LoginForm} />
	<Route exact="/home" component={HomePage} />
	<Route exact="/signup" component={SignupForm} />
   </Switch>
</Router>
	);
}

export default App;
