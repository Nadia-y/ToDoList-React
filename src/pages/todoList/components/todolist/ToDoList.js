import React from "react";
import style from "./style.module.css";
import ToDoItem from "./ToDoItem";

export const ToDoList = (props) => {
    
  return (
    <div>
      <h1 className={style.title}> My tasks</h1>
    
   
      {/* <div className={style.item}>
        <input type='text'  className={style.headline}></input>
        <button className={style.edit}>edit</button>
        <button className={style.remove}>remove</button>
    </div>
    <input type='text' className={style.input} placeholder='What you want to do'></input>
    <button className={style.add}>+</button> */}
      <ul className={style.list}>
        {props.todos.map((todo, index) => {
          return <ToDoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle} />;
        })}
      </ul>
    </div>
  );
};
