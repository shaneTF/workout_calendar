import { cardDef } from "../App";

function Column({
  title,
  column,
  cards,
}: {
  title: string;
  column: string;
  cards: cardDef[];
}) {
  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <>
      <div className="w-56 shrink-0">
        <div className="mb-3 flex items-center justify-between">
          <h3>{title}</h3>
        </div>

        <div className="h-full w-full">
          {filteredCards.map((c) => {
            return <div>{c.name}</div>;
          })}
        </div>
      </div>
    </>
  );
}

export default Column;
