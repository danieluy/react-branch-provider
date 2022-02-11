import { Provider } from "react-branch-provider";
import { Route, Routes } from "react-router-dom";
import Heading2 from "../common/Heading2";
import PostsDetail from "./PostDetails";
import { postsProvider } from "./posts.provider";
import PostsList from "./PostsList";

function Posts() {
  return (
    <Provider state={postsProvider}>
      <Heading2>Posts</Heading2>

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
