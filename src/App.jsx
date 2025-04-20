import { TodoForm } from "./components/TodoForm";
import { useEffect, useState } from "react";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    const isDuplicate = todos.some(
      (todo) => todo.text.toLowerCase() === text.toLowerCase()
    );
    if (isDuplicate) {
      alert("You already added this todo!");
      return;
    }
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const updatedTodo = (id, text) => {
    setTodos((todos) =>
      todos.map((prev) => (prev.id === id ? { ...prev, text: text } : prev))
    );
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"))
    console.log("Loaded from local storage:", storedTodos);
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    console.log("Saving to local storage:", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem("todos"));

  //   if (todos && todos.length > 0) {
  //     setTodos(todos);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  return (
    <>
      <div className="bg-[#172842] min-h-screen p-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-4 text-white">
          <h1 className="text-center font-bold text-2xl mt-2 mb-8">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* TodoForm here */}
            <TodoForm onAddTodo={addTodo} />
            <TodoList
              todos={todos}
              onDeleteTodo={deleteTodo}
              onUpdatedTodo={updatedTodo}
              onToggleTodo={toggleTodo}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
