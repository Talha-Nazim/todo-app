import TodoItem from "./TodoItem";
export const TodoList = ({
  todos,
  onDeleteTodo,
  onUpdatedTodo,
  onToggleTodo,
}) => {
  return (
    <div className="mt-8 space-y-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          // todo={todo}
          // onDeleteTodo={() => onDeleteTodo(todo.id)}
          // onUpdatedTodo={() => onUpdatedTodo(todo.id, todo.text)}
          // onToggleTodo={() => onToggleTodo(todo.id)}

          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onUpdatedTodo={onUpdatedTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </div>
  );
};
