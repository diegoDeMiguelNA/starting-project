import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import classes from "./PostList.module.css";

export default function PostList() {
  const posts = useLoaderData();
  // function addPostHandler(postData) {
  //   fetch("http://localhost:8080/posts", {
  //     method: "POST",
  //     body: JSON.stringify(postData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   setPosts((existingPosts) => [postData, ...existingPosts]);
  // }

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={Math.random(post.id)}
              author={post.author}
              message={post.message}
            />
          ))}
        </ul>
      )}
      {posts.length < 0 && (
        <div className={classes.empty}>
          <p>No posts yet</p>
          <p>Add your first post!</p>
        </div>
      )}
    </>
  );
}
