import { MultiProvider } from "react-branch-provider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { authProvider } from "./auth.provider";
import AppBar from "./components/AppBar/AppBar";
import Home from "./components/Home/Home";
import Posts from "./components/Posts/Posts";
import ToDos from "./components/ToDos/ToDos";
import User from "./components/User/User";
import { themeProvider } from "./theme.provider";

function App() {
  return (
    <MultiProvider states={[themeProvider, authProvider]}>
      <div className="App">
        <Router>
          <AppBar />

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
    </MultiProvider>
  );
}

export default App;
