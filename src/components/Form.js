import React, { useState } from 'react'

export default  function Forms(props){


    return(
    <form data-testid="to-do-form" id="todo-form" onSubmit={props.addTask}>
        <input
        id ="txtTodo"
        data-testid="task-input"
       type="text"
       placeholder ="Enter task"
       required
       value={props.value}
       onChange ={props.handleChange}
       />
       <button data-testid="add-button" type="submit" id="btnAdd">Add</button>
   </form>
    )
}
