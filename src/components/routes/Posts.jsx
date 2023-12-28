/* eslint-disable react-refresh/only-export-components */

import { Outlet } from "react-router-dom";
import PostList from "../postList/PostList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const postsData = await response.json();
  return postsData.posts;
}
