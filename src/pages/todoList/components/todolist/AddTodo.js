import React, { useState } from "react";
import style from './style.css';

const styles = {
    input:{
        border:'2px solid violet',
        width: '650px',
        height: '40px',
        marginLeft: "20px",
    },
    form:{
        marginLeft: "20px",
    },
    button:{
        marginLeft: "20px",
        width: '150px',
        height: '40px',
    }
}
function AddTodo({ onCreate }) {
  const [value, setValue] = useState('')
  
  function submitHandler(event) {
    event.preventDefault()
    if (value.trim()) {
      onCreate(value)
      setValue('')
    }
  }
  return (
    <form style={styles.form} onSubmit={submitHandler}>
      <input style={styles.input} value={value}  onChange={event => setValue(event.target.value)} />
      <button style={styles.button} type="submit">Add todo</button>
    </form>
  );
}
export default AddTodo;
