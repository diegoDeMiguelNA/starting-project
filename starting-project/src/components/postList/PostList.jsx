import { useState } from "react";
import Post from "../Post/Post";
import Modal from "../modal/Modal";
import NewPost from "../newPost/NewPost";
import classes from "./PostList.module.css";

const cards = [
  { author: "John", message: "Hello" },
  { author: "Bob", message: "Hi" },
];

export default function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState(cards);

  const addPostHandler = (postData) => {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };

  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      ) : null}
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={post.author} author={post.author} message={post.message} />
        ))}
      </ul>
    </>
  );
}
