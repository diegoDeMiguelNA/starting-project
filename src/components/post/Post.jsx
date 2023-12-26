import classes from "./Post.module.css";

export default function Post({ author, message }) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{message}</p>
    </li>
  );
}
