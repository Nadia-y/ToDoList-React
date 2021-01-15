import { nominalTypeHack } from "prop-types";


import React, { useContext } from "react";
import Context from './Context'
import style from './style.css';

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid green",
    padding: "15px",
    marginBottom:'20px',
  },
  input: {
    marginRight: "20px",
   
  },
  button: {
    backgroundColor: "red",
    border: "none",
  },
 
};

export default function ToDoItem({ todo, index, onChange }) {
const {removeTodo}= useContext(Context)
  const classes=[];
  if(todo.completed){
    classes.push('done')
  }
  return (
    <li style={styles.li}>
      <span className={classes.join('')}>
        <input type="checkbox" style={styles.input} onChange={()=> onChange(todo.id)} checked={todo.completed} />
        <strong>{index + 1} </strong>
       
        {todo.title}
      </span>
      <button onClick={removeTodo.bind(null,todo.id)} style={styles.button}>&times;</button>
    </li>
  );
}
