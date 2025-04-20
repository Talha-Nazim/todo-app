import { useState } from "react";

const TodoItem = ({ todo, onDeleteTodo, onUpdatedTodo, onToggleTodo}) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleUpdate = () => {
    onUpdatedTodo(todo.id, editedText);
    setIsTodoEditable(false);
  };


  return (
    <div
      className={`mt-4 flex  py-1.5 rounded-lg px-3 gap-x-3 border border-black/10 shadow-sm 
  shadow-white/50 text-black duration-300 ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
    >
      <input 
      type="checkbox" 
      className="cursor-pointer" 
      checked={todo.completed}
      onChange={() => onToggleTodo(todo.id)}
      />
      <input
        type="text"
        value={editedText}
        readOnly={!isTodoEditable}
        onChange={(e) => setEditedText(e.target.value)}
        onClick={() => {
          console.log(todo.completed)
          console.log(todo.id)
        }}
        className={`outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border border-black/10 px-2" : "border-transparent"
        }
        ${todo.completed ? "line-through" : ""}`}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (isTodoEditable) {
            // console.log("if block");
            handleUpdate();
          } else {
            // console.log("else");
            setIsTodoEditable((prev) => !prev);
          }
        }}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      <button
        className="inline-flex w-8 h-8 border border-black/10 bg-gray-50 rounded-lg text-sm items-center justify-center hover:bg-gray-100 shrink-0"
        onClick={() => onDeleteTodo(todo.id)}
      >
        ❌{/* {console.log(todo.id)} */}
      </button>
    </div>
  );
};

export default TodoItem;
