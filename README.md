# react-branch-provider

## What is **rbp**?

Built on top of [React Context API](https://reactjs.org/docs/context.html), **rbp** inherits its capabilities and extends them by adding a way of updating the state while making it immutable.

It proposes and architecture that combines state management, and a low boilerplate way to separate business logic from components in React.

By containing the state management logic on a certain tree level, future you won't have to worry about affecting other parts of the app that you may not remember, or even ever heard of.

```
- App.jsx
- components
  - Posts
    - posts.provider.js
    - Posts.css
    - Posts.jsx
    - PostsList.tsx
```

Unlike with global state management, you only worry about that branch. If the branch gets unmounted, the state goes away, if the branch gets scratched from the project, the state management logic goes away with it, and if te implementation is modified, it is less likely to have unintended consecuences.

## Install

```bash
npm i react-branch-provider

yarn add react-branch-provider
```

## Easy to implement

```javascript
// components/Posts/posts.provider.js

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
import { postsProvider } from "./components/Posts/posts.provider";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <Provider state={postsProvider}>
      <Posts />
    </Provider>
  );
}
```

```javascript
// components/Posts/Posts.jsx
import PostsList from "./PostsList";

function Posts() {
  return (
    <article>
      <h2>Posts</h2>

      <PostsList />
    </article>
  );
}
```

```javascript
// components/Posts/PostList.jsx

import { useBranchState } from "react-branch-provider";
import { postsProvider, getPosts } from "./posts.provider";

function PostList() {
  const state = useBranchState(postsProvider);

  useEffect(() => {
    getPosts().catch(error => console.error(error));
  }, []);

  return (
    <ul>
      {state.posts.map(post => (
        <li key={post.id}>{post.title}</li>
      )}
    </ul>
  );
}
```

## Selectors

Get only what you need and avoid unnecessary renders.

```javascript
// components/Posts/posts.provider.js
...
export const selectPosts = state => state.posts;
```

```javascript
// components/Posts/PostList.jsx
...
import { ..., selectPosts } from "./posts.provider";

function PostList() {
  const posts = useBranchState(postsProvider, selectPosts);
  ...
}
```

## Immutable state

Thanks to [immer](https://github.com/immerjs/immer), **rbp** allows for easy state manipulation. You don't need to worry about it, just go crazy!

```javascript
someStateProvider.setState((state) => {
  for (const post of state.posts) {
    if (post.id === postId) {
      post.owner = userId;
      state.users[userId].posts.push(post);
      break;
    }
  }
});
```

## Multi paradigm support.

### I like functions

```javascript
export const postsProvider = createProvider({ posts: [] });

export const getPosts = async () => {
  const posts = await fetchPosts();

  postsProvider.setState((state) => {
    state.posts = posts;
  });
};
```

### I like classes

```javascript
class PostsProvider extends BranchProvider {
  async getPosts() {
    const posts = await fetchPosts();

    this.setState((state) => {
      state.posts = posts;
    });
  }
}

export const postsProvider = new PostsProvider({ posts: [] });
```
