export default function Category({
  category,
}) {
  return <div className="category">
    <h2 className="cell">{category.title}</h2>
    {
      category.questions?.map(
        (question) => <section className="cell" key={question.text}>
          {question.text}
        </section>
      )
    }
  </div>;
}
