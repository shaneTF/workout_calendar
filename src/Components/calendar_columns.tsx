import { cardDef } from "../App";

function Column({ column, cards }: { column: string; cards: cardDef[] }) {
  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div>
      {filteredCards.map((c) => {
        return <div>{c.name}</div>;
      })}
    </div>
  );
}

export default Column;
