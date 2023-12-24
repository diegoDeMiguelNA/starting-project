import Post from "../Post/Post";

export default function PostList(props) {
  return (
    <>
      {props.cards.map((card) => (
        <Post key={card.author} author={card.author} message={card.message} />
      ))}
    </>
  );
}
