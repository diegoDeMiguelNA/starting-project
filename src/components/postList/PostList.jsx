import { useEffect, useState } from "react";
import Post from "../Post/Post";
import Modal from "../modal/Modal";
import NewPost from "../newPost/NewPost";
import classes from "./PostList.module.css";

export default function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const response = await fetch("http://localhost:8080/posts");
      const postsData = await response.json();
      if (postsData && postsData.posts) setPosts(postsData.posts);
    };
    getAllPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

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
              key={Math.random(post.id)}
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
