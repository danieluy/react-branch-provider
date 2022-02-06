import { useCallback, useEffect, useState } from "react";
import { useBranchState } from "react-branch-provider";
import { Link } from "react-router-dom";
import { Post } from "../../types/post";
import { postsProvider, PostsState } from "./posts.provider";
import "./PostsList.css";

const PostsList: React.FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const posts = useBranchState<PostsState, Post[]>(
    postsProvider,
    (state) => state.list
  );

  const handleGetPosts = useCallback(async () => {
    try {
      setIsLoading(true);

      await postsProvider.getPosts();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleGetPosts();
  }, [handleGetPosts]);

  if (isLoading) {
    return (
      <article className="article">
        <p>Loading...</p>
      </article>
    );
  }

  return (
    <ul className="post-list">
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PostsList;
