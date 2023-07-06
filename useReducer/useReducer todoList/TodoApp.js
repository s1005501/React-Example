// 透過useReducer實作todoList
import { useState, useReducer } from 'react'
import './TodoApp.css'
import Todo from './Todo'
import { ACTIONS } from './Actions'

const reducer = (todos, action) => {
  // console.log('todos', todos)
  console.log('action', action)

  const { todoContent, id } = action.payload
  switch (action.type) {
    case ACTIONS.ADD:
      return [...todos, newTodo(todoContent)]

    // 這裡的todo就是v
    case ACTIONS.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })

    // 刪除透過filter
    case ACTIONS.DELETE:
      return todos.filter((todo) => {
        return todo.id !== id
      })

    default:
      return [...todos]
  }
}

const newTodo = (todoContent) => {
  return {
    id: Math.floor(Math.random() * 100000),
    todoContent: todoContent,
    completed: false,
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, [])
  console.log(todos)
  const [todoContent, setTodoContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD, payload: { todoContent: todoContent } })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoContent}
          onChange={(e) => {
            setTodoContent(e.target.value)
          }}
          placeholder="Type in Something ..."
        />
      </form>

      {todos.map((todo) => {
        return <Todo todo={todo} dispatch={dispatch} key={todo.id} />
      })}
    </div>
  )
}

export default TodoApp
