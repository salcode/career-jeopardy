import Category from './Category';

export default function Board({
  boardData,
  question,
}) {
  if (question) {
    return <h1>{question}</h1>;
  }
  // There is no question, display the board.
  return <div className="board-wrapper">
    {
      boardData.categories.map(
        (category) => (
          <Category
            category={category}
            key={category.title}
          />
        )
      )
    }
  </div>;
}
