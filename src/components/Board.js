import Category from './Category';
import Question from './Question';

export default function Board({
  boardData,
  question,
  setQuestion,
}) {
  if (question) {
    return <Question
      question={question}
    />;
  }
  // There is no question, display the board.
  return <div className="board-wrapper">
    {
      boardData.categories.map(
        (category) => (
          <Category
            category={category}
            key={category.title}
            setQuestion={setQuestion}
          />
        )
      )
    }
  </div>;
}
