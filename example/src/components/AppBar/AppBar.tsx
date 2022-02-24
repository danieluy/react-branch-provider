import { useBranchState } from "react-branch-provider";
import { Link } from "react-router-dom";
import logo from "../../assets/react-branch-provider-icon-500w.png";
import { themeProvider } from "../../theme.provider";
import "./AppBar.css";

function AppBar() {
  const { primaryColor } = useBranchState(themeProvider);

  return (
    <nav className="main-nav" style={{ backgroundColor: primaryColor }}>
      <div>
        <img className="app-logo" src={logo} alt="app logo" />
        <h1>React Branch Provider</h1>
      </div>
      <ul className="nav-buttons">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/todos">ToDo</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
    </nav>
  );
}

export default AppBar;
