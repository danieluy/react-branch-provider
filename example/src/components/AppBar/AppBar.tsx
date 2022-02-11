import { useBranchState } from "react-branch-provider";
import { Link } from "react-router-dom";
import { themeProvider } from "../../theme.provider";
import "./AppBar.css";

function AppBar() {
  const { primaryColor } = useBranchState(themeProvider);

  return (
    <nav className="main-nav" style={{ backgroundColor: primaryColor }}>
      <h1>React Branch State</h1>
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
