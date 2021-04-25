import React from 'react';
import { ACTIONS } from '../App'

const Todos = ({todo, dispatch}) => {
    return (
        <div className="todos">
            <span style={{ textDecoration: todo.complete ? 'underline' : 'none'}}>{todo.name}</span>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id:todo.id }})}>Toggle</button>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id:todo.id }})}>Delete</button>
        </div>
    )
}

export default Todos
