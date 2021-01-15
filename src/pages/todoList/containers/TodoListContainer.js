import React from "react";
import { ToDoList } from "../components/todolist/ToDoList";
import Context from '../components/todolist/Context'
import AddTodo from "../components/todolist/AddTodo";

const TodoListContainer = (props) => {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Buy bread" },
    { id: 2, completed: false, title: "Buy milk" },
    { id: 3, completed: false, title: "Buy butter" },
  ]);
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }
  function removeTodo (id){
    setTodos(todos.filter(todo=>todo.id!= id))
  }
function addTodo(title){
  setTodos(todos.concat([
    {
      title,
      id:Date.now(),
      completed:false
    }
  ]))
}
  return (
    <Context.Provider value={{removeTodo}}> 
    <div>
 
    {todos.length ? (
          <ToDoList todos={todos} onToggle={toggleTodo} number="10" /> 
        ) :(<p>No todos!!!</p>)}
        <AddTodo onCreate={addTodo} />
    </div>

    </Context.Provider>
  );
};
export default TodoListContainer;
