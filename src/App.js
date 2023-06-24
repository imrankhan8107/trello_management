import { createContext, useState } from "react";
import "./App.css";
import Trello from "./Components/Trello";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const trelloContext = createContext({
  todo: [],
  setTodo:(obj)=>obj,
  inProgress: [],
  setInProgress:(obj)=>obj,
  done: [],
  setDone:(obj)=>obj,
});

const TodoTasks = [
  {
    id: 1,
    name: "Task 1",
    due_date: "2021-09-01",
    created_at: "2021-08-01",
    description: "This is task 1",
  },
  {
    id: 2,
    name: "Task 2",
    due_date: "2021-09-01",
    created_at: "2021-08-01",
    description: "This is task 2",
  },
  {
    id: 3,
    name: "Task 3",
    due_date: "2021-09-01",
    created_at: "2021-08-01",
    description: "This is task 3",
  },
];

const InProgressTasks = [
  {
    id: 2,
    name: "Task 2",
    due_date: "2021-09-01",
    created_at: "2021-08-01",
    description: "This is task 2",
  },
  {
    id: 3,
    name: "Task 3",
    due_date: "2021-09-01",
    created_at: "2021-08-01",
    description: "This is task 3",
  },
];

const DoneTasks = [
  {
    id: 4,
    name: "Task 4",
    due_date: "2021-09-01",
    created_at: "2021-08-01",
    description: "This is task 4",
  },
  {
    id: 5,
    name: "Task 5",
    due_date: "2021-09-01",
    created_at: "2021-08-01",
    description: "This is task 5",
  },
];

function App() {
  const [todo, setTodo] = useState(TodoTasks);
  const [inProgress, setInProgress] = useState(InProgressTasks);
  const [done, setDone] = useState(DoneTasks);
  return (
    <div className="App">
      <trelloContext.Provider
        value={{
          todo: todo,
          setTodo: setTodo,
          inProgress: inProgress,
          setInProgress: setInProgress,
          done: done,
          setDone: setDone,
        }}
      >
        <Trello />
      </trelloContext.Provider>
    </div>
  );
}

export default App;
