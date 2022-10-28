export default function Category({
  category,
}) {
  return <div className="category">
    <h2 className="cell">{category.title}</h2>
    {
      category.questions?.map(
        (question, index) =>
          <button
            className="cell"
            key={question.text}
            onClick={
              () => console.log(question.text)
            }
          >
            ${100*(index+1)}
          </button>
      )
    }
  </div>;
}
