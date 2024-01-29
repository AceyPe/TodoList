import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    const addTodo = todo =>
    {
        setTodos([...todos, {task: todo}])
    }

    const deleteTodo = task => {
        setTodos(todos.filter(todo => todo !== task))
    }

    return (
        <div className='TodoWrapper'>
            <TodoForm  addTodo={addTodo}/>
            {todos.map((todo, index) =>(
                <Todo task={todo} key={index} deleteTodo={deleteTodo} />
            ))}
        </div>
    )
}