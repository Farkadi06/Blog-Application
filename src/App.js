import Navbar from "./Components/Navbar/Navbar";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import Login from "./Screens/Login/Login";
import Settings from "./Screens/Settings/Settings";
import Single from "./Screens/Single/Single";
import Write from "./Screens/Write/Write";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Login/>
    </div>
  );
}

export default App;
