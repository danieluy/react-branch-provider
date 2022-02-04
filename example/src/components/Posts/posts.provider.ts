import { BaseProvider } from "branch-state";
import { Post } from "../../types/post";
import { getPost, getPosts } from "../services/post.service";

export type PostsState = {
  list: Post[];
  selected?: Post;
};

class PostsProvider extends BaseProvider<PostsState> {
  getPosts = async () => {
    const posts = await getPosts();

    this.setState((prevState) => ({ ...prevState, list: posts }));
  };

  getSelectedPost = async (postId: number) => {
    const post = await getPost(postId);

    this.setState((prevState) => ({ ...prevState, selected: post }));
  };
}

export const postsProvider = new PostsProvider({ list: [] });
