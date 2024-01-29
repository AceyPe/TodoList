import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        
        (value== null || value.replace(/ /g, "") == "")? alert("please enter a valid task! :)"): addTodo(value);
        
        setValue(null);
    }


    return (
        <form className='todoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' placeholder='Enter Task' value={null} onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='submitBtn'>Submit</button>
        </form>
    )
}