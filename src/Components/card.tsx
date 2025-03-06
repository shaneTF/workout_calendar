function Card({
  name,
  id,
  column,
}: {
  name: string;
  id: number;
  column: string;
}) {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

export default Card;
