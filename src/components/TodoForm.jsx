import { useState } from "react";

export const TodoForm = ({onAddTodo}) => {

  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(text);
    // console.log("submitting", text);
    
    setText("");
  }

  return (
  <form onSubmit={handleSubmit} className="flex">
    <input 
    type="text" 
    className="w-full rounded-l-lg bg-white/20 px-3 py-1.5 duration-150 border-black/10 outline-none"
    placeholder="Write Todo..."
    value={text}
    onChange={(e) => setText(e.target.value)}
    />
    <button className="bg-green-600 rounded-r-lg px-3 py-1.5 shrink-0" type="submit">Add</button>
  </form>
  )
}