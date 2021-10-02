import React from "react";

function InputTodo() {
  return (
    <>
      <h1 className="text-center mt-5">Task</h1>
      <form className="d-flex mt-5">
        <input type="text" className="form-control" />
        <button className="btn btn-success ">Add</button>
      </form>
    </>
  );
}

export default InputTodo;
