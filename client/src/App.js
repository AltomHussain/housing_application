import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage"
import "./App.css";
import SignupForm from "./component/SignupForm";
import LoginForm from "./component/LoginForm"
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  toast.configure();
export function App() {

	return (
		<BrowserRouter>
<Router>
   <Switch>
	<Route exact path="/" component={LoginForm} />
	<Route exact path="/home" component={HomePage} />
	<Route exact path="/signup" component={SignupForm} />
   </Switch>
</Router>
	</BrowserRouter>);
}

export default App;
