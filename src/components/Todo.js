import React, {useState} from 'react'



export const Todo = ({task, deleteTodo}) => {

    return (
        <div>
        <li className='Tasks'>
            <p>{task.task}</p>
            <button className='deleteBtn' onClick={() =>
                deleteTodo(task)}>Delete</button>
        </li>
    </div>
    )
}