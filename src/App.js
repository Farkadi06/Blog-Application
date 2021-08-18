import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import Login from "./Screens/Login/Login";
import Register from "./Screens/Register/Register";
import Settings from "./Screens/Settings/Settings";
import Single from "./Screens/Single/Single";
import Write from "./Screens/Write/Write";

function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <HomeScreen/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/write">
            <Write/>
          </Route>
          <Route path="/settings">
            <Settings/>
          </Route>
          <Route path="/post/:postId">
            <Single/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
