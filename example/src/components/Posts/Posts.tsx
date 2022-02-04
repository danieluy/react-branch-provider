import { Provider } from "branch-state";
import { Route, Routes } from "react-router-dom";
import PostsDetail from "./PostDetails";
import { postsProvider } from "./posts.provider";
import PostsList from "./PostsList";

function Posts() {
  return (
    <Provider state={postsProvider}>
      <h2>Posts</h2>

      <br />

      <h3>All Posts</h3>

      <br />

      <PostsList />

      <br />

      <Routes>
        <Route path=":postId" element={<PostsDetail />} />
      </Routes>
    </Provider>
  );
}

export default Posts;
