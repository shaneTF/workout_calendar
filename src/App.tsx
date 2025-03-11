import "./App.css";

import TESTWORKOUTS from "./data/testWorkouts.tsx";

import Column from "./Components/calendar_columns.tsx";
import { useState } from "react";

export type cardDef = {
  id: number;
  name: string;
  description: string;
  column: string;
};

function App() {
  const [cards, setCards] = useState(TESTWORKOUTS);

  return (
    <>
      <main className="flex h-full w-full gap-3 p-12 overflow-scroll">
        <Column title="Monday" column="monday" cards={cards} />
        <Column title="Tuesday" column="tuesday" cards={cards} />
        <Column title="Wednesday" column="wednesday" cards={cards} />
        <Column title="Thursday" column="thursday" cards={cards} />
        <Column title="Friday" column="friday" cards={cards} />
      </main>
    </>
  );
}

export default App;
