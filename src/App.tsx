import "./App.css";

import TESTWORKOUTS from "./data/TESTWORKOUTS";

function App() {
  return (
    <>
      <main className="flex flex-col min-h-screen items-center space-y-4">
        <h1 className="text-xl font-bold mt-4">Workouts</h1>
        {TESTWORKOUTS.map((workout, index) => (
          <div className="relative flex border rounded p-2 space-x-3 bg-gray-100">
            {workout.name}
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
