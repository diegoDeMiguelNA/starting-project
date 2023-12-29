import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import classes from "./PostList.module.css";

export default function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={Math.random(post.id)}
              author={post.author}
              message={post.message}
              id={post.id}
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
