import React, { useContext } from "react";
import "../styles/Trello.css";
import Swimlane from "./Swimlane";
import { trelloContext } from "../App";

export default function Trello() {
  const { todo, inProgress, done, setTodo, setInProgress, setDone } =
    useContext(trelloContext);
  const handleItemDragStart = (oldSwimlane, item) => {
    // Set the item being dragged
    const oldSL = oldSwimlane.className.split(" ")[1];
    if (oldSL === "todo") {
      setTodo(todo.filter((t) => t.id !== JSON.parse(item).id));
    }
    if (oldSL === "inProgress") {
      setInProgress(inProgress.filter((t) => t.id !== JSON.parse(item).id));
    }
    if (oldSL === "done") {
      setDone(done.filter((t) => t.id !== JSON.parse(item).id));
    }
  };

  const handleItemDrop = (newSwimlane, item) => {
    // Remove the item from the swimlane it was dragged from
    // Add the item to the swimlane it was dropped to
    console.log(newSwimlane, JSON.parse(item));
    const newSL = newSwimlane.className.split(" ")[1];
    if (newSL === "todo") {
      setTodo([...todo, JSON.parse(item)]);
    }
    if (newSL === "inProgress") {
      setInProgress([...inProgress, JSON.parse(item)]);
    }
    if (newSL === "done") {
      setDone([...done, JSON.parse(item)]);
    }
  };
  return (
    <div className="trello">
      <Swimlane
        title="todo"
        items={todo}
        onItemDragStart={handleItemDragStart}
        onItemDrop={handleItemDrop}
      />
      <Swimlane
        title="inProgress"
        items={inProgress}
        onItemDragStart={handleItemDragStart}
        onItemDrop={handleItemDrop}
      />
      <Swimlane
        title="done"
        items={done}
        onItemDragStart={handleItemDragStart}
        onItemDrop={handleItemDrop}
      />
    </div>
  );
}
