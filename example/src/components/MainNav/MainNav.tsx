import { Link } from "react-router-dom";
import "./MainNav.css";

function MainNav() {
  return (
    <nav className="main-nav">
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

export default MainNav;
