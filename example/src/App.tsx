import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import MainNav from "./components/MainNav/MainNav";
import Posts from "./components/Posts/Posts";
import ToDos from "./components/ToDos/ToDos";
import User from "./components/User/User";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNav />

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/posts/*" element={<Posts />} />

            <Route path="/todos/*" element={<ToDos />} />

            <Route path="/user" element={<User />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
