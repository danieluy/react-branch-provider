import { Route } from "react-router-dom";
import Posts from "./Posts";

function PostRoute<Route>() {
  return (
    <Route path="/posts/*">
      <Route index element={<Posts />} />
    </Route>
  );
}

export default PostRoute;
