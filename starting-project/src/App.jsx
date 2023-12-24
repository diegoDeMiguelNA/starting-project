import { useState } from "react";
import classes from "./App.module.css";
import Post from "./components/Post/Post";
import Modal from "./components/modal/Modal";
import NewPost from "./components/newPost/NewPost";
import PostList from "./components/postList/PostList";

const cards = [
  { author: "John", message: "Hello" },
  { author: "Bob", message: "Hi" },
];

function App() {
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
      <ul className={classes.post}>
        <Post author={enteredAuthor} message={enteredBody} />
        <PostList cards={cards} />
      </ul>
    </>
  );
}

export default App;
