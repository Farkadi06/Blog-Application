import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import Login from "./Screens/Login/Login";
import Register from "./Screens/Register/Register";
import Settings from "./Screens/Settings/Settings";
import Single from "./Screens/Single/Single";
import Write from "./Screens/Write/Write";

function App() {
  const user = false;
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomeScreen/>
        </Route>
        <Route path="/register">{user ? <HomeScreen /> : <Register />}</Route>
        <Route path="/login">{user ? <HomeScreen /> : <Login />}</Route>
        <Route path="/write">{!user ? <HomeScreen /> : <Write />}</Route>
        <Route path="/settings">{!user ? <HomeScreen /> : <Settings />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
