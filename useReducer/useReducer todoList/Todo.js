import { ACTIONS } from './Actions'

function Todo({ todo, dispatch }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.completed ? 'line-through' : null }}>
        {todo.todoContent}
      </span>

      <button
        className="toggle"
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE, payload: { id: todo.id } })
        }
      >
        {todo.completed ? 'Cancel' : 'Completed'}
      </button>

      <button
        className="delete"
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  )
}

export default Todo
