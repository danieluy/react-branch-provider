import { useBranchState } from "branch-state";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isNil } from "../../helpers";
import { Post } from "../../types/post";
import { postsProvider, PostsState } from "./posts.provider";
import "./PostsList.css";

const PostsDetail: React.FC = (): JSX.Element => {
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const post = useBranchState<PostsState, Post | undefined>(
    postsProvider,
    (state) => state.selected
  );

  const handleGetPost = useCallback(async (postId: number) => {
    try {
      setIsLoading(true);

      await postsProvider.getSelectedPost(postId);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isNil(postId)) {
      handleGetPost(Number(postId));
    }
  }, [handleGetPost, postId]);

  if (isLoading) {
    return (
      <article>
        <br />

        <p>Loading...</p>
      </article>
    );
  }

  if (!post) {
    return (
      <article>
        <br />

        <p>Select a post to view details</p>
      </article>
    );
  }

  return (
    <article>
      <br />

      <h3>Selected Post</h3>

      <br />

      <p className="bold">{post.title}</p>

      <p>{post.body}</p>
    </article>
  );
};

export default PostsDetail;
