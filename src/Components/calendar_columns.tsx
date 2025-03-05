import { JSX } from "react/jsx-runtime";
import Card from "./card";

function Column({
  title,
  column,
  cards,
  setCards,
}: {
  title: string;
  column: string;
  cards: any;
  setCards: any;
}) {
  const filteredCards = cards.filter(
    (c: { column: string }) => (c.column = column)
  );

  return (
    <div>
      {filteredCards.map(
        (
          c: JSX.IntrinsicAttributes & {
            title: string;
            id: number;
            column: string;
          }
        ) => {
          return <Card key={c.id} {...c} />;
        }
      )}
    </div>
  );
}

export default Column;
