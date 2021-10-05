import React from 'react'


var index =0
export default function List(props) {
   const taskList=props.todoList
    return (
        <div data-testid="to-do-list" id="todo-list">
            
            {taskList.map(item =>(
                taskList?
                <li id="item" key={index++}> {item.Name}</li>:""
            ))}
        </div>
    )
}