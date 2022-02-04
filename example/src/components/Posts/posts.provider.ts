import { BaseProvider } from "branch-state";
import { Post } from "../../types/post";
import { getPost, getPosts } from "../services/post.service";

export interface PostsState {
  list: Post[];
  selected?: Post;
}

class PostsProvider extends BaseProvider<PostsState> {
  async getPosts(): Promise<void> {
    const posts = await getPosts();

    this.setState((state) => {
      state.list = posts;
    });
  }

  async getSelectedPost(postId: number): Promise<void> {
    const post = await getPost(postId);

    this.setState((state) => {
      state.selected = post;
    });
  }
}

export const postsProvider = new PostsProvider({ list: [] });
