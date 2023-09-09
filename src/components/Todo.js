import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, updateTodo } from '../reducers/todo'
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
    const [task, setTask] = useState('')
    const [newTask, setNewTask] = useState('')

    const logTask = useSelector((state) => state.todo.value)
    const dispatch = useDispatch()

    // console.log(logTask);

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo({
            id: uuidv4(),
            name: task
        }))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setTask(e.target.value)} placeholder='add new todo...' />
                <input type="submit" name="Send" />
            </form>

            <div>
                {
                    logTask.map((i, index) => (
                        <div key={index}>
                            <p>{i.name}</p>
                            <input type="text" onChange={(e) => setNewTask(e.target.value)} placeholder={i.name}/>
                            <p>
                                <button onClick={() => dispatch(updateTodo({ id: i.id, name: newTask }))}>update</button>
                                <button onClick={() => { dispatch(deleteTodo({ id: i.id })) }}>&emsp;X</button>
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Todo