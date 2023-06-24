import React from "react";
import "../styles/Card.css";

export default function Card({ todo, onDragStart }) {
  return (
    <div className="card" draggable onDragStart={onDragStart}>
      <h3>{todo.name}</h3>
      <h4>{todo.due_date}</h4>
      <h4>{todo.created_at}</h4>
      <h4>{todo.description}</h4>
    </div>
  );
}
