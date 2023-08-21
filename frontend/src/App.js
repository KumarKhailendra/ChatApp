import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import SportPage from "./Pages/SportsCategory";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} exact/>
      <Route path="/sportCategory" component={SportPage} exact/>
    </div>
  );
}

export default App;