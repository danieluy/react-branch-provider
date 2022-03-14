# React Branch Provider

## What is **rbp**?

Built on top of [React Context API](https://reactjs.org/docs/context.html), **rbp** inherits its capabilities and extends them by adding a way of updating the state while making it immutable.

It fits right into a Component-Based Architecture by offering a low boilerplate way to **separate state management and business logic from the UI**, while keeping everything on the same module.

```
- App.jsx
- components
  - Posts
    - posts.provider.js
    - Posts.css
    - Posts.jsx
    - PostsList.tsx
```

By containing the state management logic on a certain tree level, future you won't have to worry about affecting other parts of the app that you may not remember, or even ever heard of.

Unlike with global state management, you only worry about that branch. If the branch gets unmounted, the state goes away, if the branch gets scratched from the project, the state management logic goes away with it, and if the implementation is modified, it is less likely to have unintended consecuences.

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

Get only what you need, it's cleaner.

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

Alternatively, you can return a new state entirely, the old fashion way.

```javascript
someStateProvider.setState((state) => {
  return {
    ...state,
    // write the same changes here ;)
  };
});
```

## Nesting providers

Since **rbp** is built on top of [React Context API](https://reactjs.org/docs/context.html) this is an easy task.

```javascript
// you can go like

function App() {
  return (
    <Provider state={themeProvider}>
      <Provider state={authProvider}>
        <Posts />
      </Provider>
    </Provider>
  );
}
```

## MultiProvider

**rbp** extends the nesting capabilities by allowing to pass multiple providers to a single component.

```javascript
// this looks cleaner

function App() {
  return (
    <MultiProvider states={[themeProvider, authProvider]}>
      <Posts />
    </MultiProvider>
  );
}
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

## Tooling

There is a [Google Chrome extension](https://chrome.google.com/webstore/detail/react-branch-provider-too/ngclangfmhlefailedjadjcmghdmaieh) to help us visualize the current providers' state.

In order for this tool to work the project needs to be built in developer mode. Mode specifically:

```javascript
process.env.NODE_ENV === "development";
```

### Naming providers

Providers on this tool can be either **named** on **unnamed**.

To name a functional provider the factory function takes a optional second paramenter.

```javascript
function createProvider(state: any, name?: string): BranchProvider;
```

Class providers are automatically named with their constructor name. To override this behavior the constructor takes an optional second parameter.

```javascript
class PostsProvider extends BranchProvider {}

new PostsProvider({ posts: [] }); // will be named PostsProvider

new PostsProvider({ posts: [] }, "Posts"); // will be named Posts
```
