import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import SignupForm from "./component/SignupForm";
import GetOneHouse from "./component/GetOneHouse"
import LoginForm from "./component/LoginForm";
import { HousesContextProvider } from "./component/Context/GetAllHouses";

  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import AddNewHouse from "./component/AddNewHouse";
  toast.configure();

export function App() {
  return (
    <HousesContextProvider>
      <BrowserRouter>
        <Router>
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path="/getonehouse/:id" component={GetOneHouse} />
            <Route exact path="/newhouse" component={AddNewHouse} />

          </Switch>
        </Router>
      </BrowserRouter>
    </HousesContextProvider>
  );
}

export default App;
