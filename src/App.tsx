import "./App.css";

import TESTWORKOUTS from "./data/testWorkouts.tsx";

import Column from "./Components/calendar_columns.tsx";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState(TESTWORKOUTS);

  return (
    <>
      <main>
        <Column
          title="Monday"
          column="monday"
          cards={cards}
          setCards={setCards}
        />
      </main>
    </>
  );
}

export default App;
