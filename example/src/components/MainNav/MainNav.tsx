import { Link } from "react-router-dom";
import "./MainNav.css";

function MainNav() {
  return (
    <nav className="main-nav">
      <h1>React Branch State</h1>
      <ul className="nav-buttons">
        <li>
          <Link to="/">User</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
