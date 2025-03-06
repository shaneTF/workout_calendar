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
      <main>
        <Column column="monday" cards={cards} />
        <Column column="tuesday" cards={cards} />
        <Column column="wednesday" cards={cards} />
        <Column column="thursday" cards={cards} />
        <Column column="friday" cards={cards} />
      </main>
    </>
  );
}

export default App;
