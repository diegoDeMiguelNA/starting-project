import { useState } from "react";
import Post from "../Post/Post";
import Modal from "../modal/Modal";
import NewPost from "../newPost/NewPost";
import classes from "./PostList.module.css";

const cards = [
  { author: "John", message: "Hello" },
  { author: "Bob", message: "Hi" },
];

export default function PostList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };
  return (
    <>
      {modalIsVisible ? (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      ) : null}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} message={enteredBody} />
        {cards.map((card) => (
          <Post key={card.author} author={card.author} message={card.message} />
        ))}
      </ul>
    </>
  );
}
