import React from "react";


const Counter = ({ counterValue, handleAdd, handleRemove, reset, par }) => {
  return (
    <div>
      <h1>Counter number two: {counterValue} </h1>
      <h2>Counter is:{par}</h2>
      <div>
        <button style={{ marginRight: 10 }} onClick={handleAdd}>
          Add 1
        </button>
        <button style={{ marginRight: 10 }} onClick={handleRemove}>
          Remove 1
        </button>
        <button onClick={reset}>Reset</button>
      
      </div>
    </div>
  );
};

export default Counter;
