export default function Category({
  category,
  setQuestion,
}) {
  return <div className="category">
    <h2 className="cell">{category.title}</h2>
    {
      category.questions?.map(
        (question, index) =>
          <button
            className="cell"
            disabled={question?.isRead}
            key={question.text}
            onClick={
              () => setQuestion(question.text)
            }
          >
            ${100*(index+1)}
          </button>
      )
    }
  </div>;
}
