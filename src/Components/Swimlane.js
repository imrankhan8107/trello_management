import React from "react";
import Card from "./Card";
import "../styles/Swimlane.css";

export default function Swimlane({
  title,
  items,
  onItemDragStart,
  onItemDrop,
}) {
  const handleDragStart = (e, item) => {
    const oldSwimlane = e.target.closest(".swimlane");
    onItemDragStart(oldSwimlane, JSON.stringify(item));
    e.dataTransfer.setData("text/plain", JSON.stringify(item));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const item = e.dataTransfer.getData("text/plain");
    const newSwimlane = e.target.closest(".swimlane");
    onItemDrop(newSwimlane, item);
  };
  //   const items = useContext(trelloContext);
  console.log(items);
  return (
    <div
      className={`swimlane ${title}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <center className="title">{title.toUpperCase()}</center>
      {items.map((item) => (
        <Card todo={item} onDragStart={(e) => handleDragStart(e, item)} />
      ))}
    </div>
  );
}
