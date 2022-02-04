import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainNav from "./components/MainNav/MainNav";
import Posts from "./components/Posts/Posts";
import User from "./components/User/User";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNav />

        <Routes>
          <Route path="/" element={<User />} />

          <Route path="/posts/*" element={<Posts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
