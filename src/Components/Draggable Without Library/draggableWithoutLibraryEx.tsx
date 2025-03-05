import { useRef, useState } from "react";

function test() {
  // Setup People list
  const [people, setPeople] = useState([
    { id: 1, name: "John Doe", content: "Lorem ipsum dolor sit amet." },
    { id: 2, name: "Jane Doe", content: "Lorem ipsum dolor sit amet." },
    { id: 3, name: "Tom Holland", content: "Lorem ipsum dolor sit amet." },
    { id: 4, name: "Joe Swansan", content: "Lorem ipsum dolor sit amet." },
    { id: 5, name: "Peter Griffin", content: "Lorem ipsum dolor sit amet." },
  ]);

  // Ref for initial dragged list item
  const dragPerson = useRef<number>(0);
  // Ref for the list item being replaced by initial dragged person
  const draggedOverPerson = useRef<number>(0);

  // Sort function that swaps the index of list items replacing one another
  function handleSort() {
    const peopleClone = [...people];
    const temp = peopleClone[dragPerson.current];

    peopleClone[dragPerson.current] = peopleClone[draggedOverPerson.current];
    peopleClone[draggedOverPerson.current] = temp;
    setPeople(peopleClone);
  }

  // People is mapped and within the div the index for each item is added. Div is set to draggable and onDrag functions are setup to swap the indexes when drag event ends.
  return (
    <>
      <main className="flex min-h-screen flex-col items-center space-y-4">
        <h1 className="text-xl font-bold mt-4">List</h1>
        {people.map((person, index) => (
          <div
            className="relative flex space-x-3 border rounded p-2 bg-gray-100"
            draggable
            onDragStart={() => (dragPerson.current = index)}
            onDragEnter={() => (draggedOverPerson.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >
            {person.name}
          </div>
        ))}
      </main>
    </>
  );
}

export default test;
