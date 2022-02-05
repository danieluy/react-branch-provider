# react-branch-provider

- State management, and low boilerplate way to separate business logic from components in React.
- Small footprint
- Inspired by the [Provider Package for Flutter](https://pub.dev/packages/provider).

## Install

```bash
npm i react-branch-provider

yarn add react-branch-provider
```

## Easy to implement

```javascript
// posts.provider.js

import { createProvider } from "react-branch-provider";

export const postsProvider = createProvider({ posts: [] });

export const getPosts = async () => {
  const posts = await fetchPosts();

  postsProvider.setState((state) => {
    state.posts = posts; // it's safe to mutate the state
  });
};
```

```javascript
// App.jsx

import { Provider } from "react-branch-provider";
import { postsProvider } from "./posts.provider";

function App() {
  return (
    <Provider state={postsProvider}>
      <PostList />
    </Provider>
  );
}
```

```javascript
// PostList.jsx

import { useBranchState } from "react-branch-provider";
import { postsProvider, getPosts } from "./posts.provider";

function PostList() {
  const posts = useBranchState(postsProvider);

  useEffect(() => {
    getPosts().catch(error => console.error(error));
  }, [getPosts]);

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      )}
    </ul>
  );
}
```

## Multi paradigm support.

### Functional

```javascript
export const postsProvider = createProvider({ posts: [] });

export const getPosts = async () => {
  const posts = await fetchPosts();

  postsProvider.setState((state) => {
    state.posts = posts;
  });
};
```

### OOP

```javascript
class PostsProvider extends BranchProviderBase<UserInfo> {
  async getPosts() {
    const posts = await fetchPosts();

    this.setState((state) => {
      state.posts = posts;
    });
  }
}

export const postsProvider = new PostsProvider({ posts: [] });
```
