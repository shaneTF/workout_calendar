function Card({
  title,
  id,
  column,
}: {
  title: string;
  id: number;
  column: string;
}) {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
}

export default Card;
