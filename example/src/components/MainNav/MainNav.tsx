import { Link } from "react-router-dom";

function MainNav() {
  return (
    <nav>
      <h1>React Branch State</h1>
      <ul>
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
