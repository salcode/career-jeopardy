import Category from './Category';

export default function Board({
  boardData,
}) {
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
