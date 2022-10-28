export default function Category({
  category,
}) {
  return <div className="category">
    <h2>{category.title}</h2>
    {
      category.questions?.map(
        (question) => <section key={question.text}>
          {question.text}
        </section>
      )
    }
  </div>;
}
