import React from 'react'

function Todo(props) {
  const todoStyle = {
    color: "whitesmoke",
    borderRadius: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",
    backgroundColor: "#227C9D"
  }
  return (
    <div className='container my-3 text-center' style={todoStyle}>
      <h3>No: {props.todo.sno}</h3>
      <h1>{props.todo.title}</h1>
      <h2>{props.todo.desc}</h2>
      <button className="btn btn-danger btn-sm" type="button" onClick={() => props.onDelete(props.todo)}>Delete</button>
    </div>
  )
}

export default Todo
