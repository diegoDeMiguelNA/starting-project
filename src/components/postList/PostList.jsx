import { useState } from "react";
import Post from "../Post/Post";
import Modal from "../modal/Modal";
import NewPost from "../newPost/NewPost";
import classes from "./PostList.module.css";

export default function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

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
      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.author}
              author={post.author}
              message={post.message}
            />
          ))}
        </ul>
      ) : (
        <div className={classes.empty}>
          <p>No posts yet</p>
          <p>Add your first post!</p>
        </div>
      )}
    </>
  );
}
